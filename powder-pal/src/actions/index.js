import constants from './../constants';
import Firebase from 'firebase';

const {types} = constants;
const {firebaseConfig} = constants;

Firebase.initializeApp(firebaseConfig);

const resortList = Firebase.database().ref('resorts/');

export const findResortsByLoc = (location) => ({
  type: types.FIND_RESORTS_L,
  location
});

export const getResortsByLoc = (resortObj) => ({
    type: types.GET_RESORTS_L,
    resorts: resortObj
});

export const getPlaceInfo = (placeCandidates) => ({
  type: types.GET_PLACE_INFO,
  placeCandidates: placeCandidates
})

export const getPlacePhotoURL = (placePhotoURL) => ({
  type: types.GET_PLACE_PHOTO,
  placePhotoURL: placePhotoURL
})

export const getLiftieInfo = (liftieData) => ({
  type: types.GET_LIFTIE_INFO,
  liftieData: liftieData
})

export const getUserGeo = (userGeo) => ({
  type: types.GET_USER_GEO,
  userGeo: userGeo
})

export const getLiftieResort = (liftieResortInfo) => ({
  type: types.GET_LIFTIE_RESORT,
  liftieResortInfo: liftieResortInfo
})

export function getResortListSnapshot() {
  return function (dispatch) {
  resortList.once('value').then(function(snapshot) {
    const resortSnapshot = snapshot.val();
    dispatch(getLiftieInfo(resortSnapshot))
  })}
}

export function calculateDistance(lat1, lon1, lat2, lon2, unit) {
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return Math.round(dist);
  }
}

export function getLiftieResortData(fullList, geoCoords) {
  return function (dispatch){
    const filteredList = [];
    fullList.forEach((resortInList, index) => {
      let distance = calculateDistance(geoCoords.lat, geoCoords.lng, resortInList.ll[1], resortInList.ll[0], "M");
      if (distance < 100) {
        filteredList.push(resortInList);
      }
    });
    filteredList.forEach((resortInFilteredList) => {
      return fetch(`https://liftie.info/api/resort/${resortInFilteredList.id}`).then(
        response => response.json(),
        error => console.log("FAIL", error)
        ).then(function(resortData) {
          if(resortData.id) {
            dispatch(getLiftieResort(resortData));
        }
      });
    });
  }
}

export function getUserGeoCode(query) {
  const formattedQuery = query.split(' ').join('+');
  return function(dispatch) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedQuery}&key=AIzaSyAWV1qRc5xLad5NRq3NdE-8lHLTRVkDsuE`).then(
      response => response.json(),
      error => console.log("FAIL", error)
    ).then(function(geodata) {
      console.log(geodata)
      if(geodata.results) {
        const results = geodata.results[0].geometry.location;
        dispatch(getUserGeo(results));
      }
    })
  }
}
// query for parameter when search added
export function fetchResorts() {
  return function (dispatch) {

    // const location = query;
    // dispatch(findResortsByLoc(location));

    return fetch('https://api.weatherunlocked.com/api/snowreport/333005?app_id=8ff7c2f3&app_key=0dca412f784bd9bf44a313a9c2110699').then(
      response => response.json(),
      error => console.log("FAIL", error)
    ).then(function(data) {

      if (data.resortname) {
        const resort = data;
        fetchResortPlacesData(dispatch);
        fetchLiftieInfo(dispatch);
        dispatch(getResortsByLoc(resort));
      }
    })
  }
}

export function fetchLiftieInfo(dispatch) {
  return fetch('https://liftie.info/api/resort/courchevel').then(
    response => response.json(),
    error => console.log("Fail", error)
  ).then(function(liftieData) {
  })
}

export function fetchResortPlacesData(dispatch) {
  return fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Courchevel%20France&inputtype=textquery&fields=photos,rating,geometry,name,place_id,formatted_address&key=AIzaSyAWV1qRc5xLad5NRq3NdE-8lHLTRVkDsuE&').then(
    response => response.json(),
    error => console.log("FAIL", error)
  ).then(function(placesData) {
    if(placesData.candidates) {
      fetchResortPlacesPhoto(placesData.candidates[0].photos[0].photoreference, dispatch);
      dispatch(getPlaceInfo(placesData.candidates));
    }
  });
}

export function fetchResortPlacesPhoto(photoId, dispatch) {
  return fetch('https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAA7l6BOtpmklpsR15Oov-pM0rZgmCVpRFUwsgwldjpYmFnh2TF6R-rRVu2YCA5HmWKMrS7_If2J7zxBtauDCoSsPoj4RJdm3L0AzagOy4pncmH30_axiKB3T2-sdzBtBFPEhABpa-x53axODzIVL30qcHvGhSc2mxTLw5KMiCoI9qD6a--kRl3Dg&key=AIzaSyAWV1qRc5xLad5NRq3NdE-8lHLTRVkDsuE').then(
    response => response.blob(),
    error => console.log("FAIL", error)
  ).then(function(image) {
    if (image) {
      let blobUrl = URL.createObjectURL(image);
      dispatch(getPlacePhotoURL(blobUrl));
    }
  })
}
