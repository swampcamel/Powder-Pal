import constants from './../constants';
import Firebase from 'firebase';

const {types} = constants;
const {firebaseConfig} = constants;

Firebase.initializeApp(firebaseConfig);

const resortList = Firebase.database().ref('resorts/');

export const getLiftieInfo = (liftieData) => ({
  type: types.GET_LIFTIE_INFO,
  liftieData: liftieData
})

export const getUserGeo = (userGeo, query) => ({
  type: types.GET_USER_GEO,
  userGeo: userGeo,
  query: query
})

export const getLiftieResort = (liftieResortInfo) => ({
  type: types.GET_LIFTIE_RESORT,
  liftieResortInfo: liftieResortInfo
})

export const refreshFilteredList = () => ({
  type: types.REFRESH_FILTERED_RESULTS
})

export const selectResort = (selectedResort) => ({
  type: types.SELECT_RESORT,
  selectedResort: selectedResort
})

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

export function getResortListSnapshot() {
  return function (dispatch) {
  resortList.once('value').then(function(snapshot) {
    const resortSnapshot = snapshot.val();
    dispatch(getLiftieInfo(resortSnapshot))
  })}
}

export function getUserGeoCode(query) {
  const formattedQuery = query.split(' ').join('+').split(',').join();
  return function(dispatch) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedQuery}&key=AIzaSyAWV1qRc5xLad5NRq3NdE-8lHLTRVkDsuE`).then(
      response => response.json(),
      error => console.log("FAIL", error)
    ).then(function(geodata) {
      if(geodata.results) {
        const results = geodata.results[0].geometry.location;
        dispatch(getUserGeo(results, query));
      }
    })
  }
}

export function getLiftieResortData(fullList, geoCoords, distanceInput, liftStatusInput) {
  return function (dispatch){
    dispatch(refreshFilteredList());
    const filteredList = [];
    fullList.forEach((resortInList, index) => {
      let distance = calculateDistance(geoCoords.lat, geoCoords.lng, resortInList.ll[1], resortInList.ll[0], "M");
      if (distanceInput === "no-limit") {
        filteredList.push(resortInList);
      } else if (distance < parseInt(distanceInput)) {
        filteredList.push(resortInList);
      }
    });
    filteredList.forEach((resortInFilteredList) => {
      return fetch(`https://liftie.info/api/resort/${resortInFilteredList.id}`).then(
        response => response.json(),
        error => console.log("FAIL", error)
        ).then(function(resortData) {
          if(resortData.id) {
            console.log(liftStatusInput)
            if(liftStatusInput === "open"  && resortData.lifts.stats.percentage.closed !== 100 && resortData.lifts.stats.percentage.scheduled !== 100){
              var x = fetchResortPlaces(resortData);
              x(dispatch)
            } else if (liftStatusInput === "all") {
              var x = fetchResortPlaces(resortData);
              x(dispatch)
            }
        }
      });
    });
  }
}

export function fetchResortPlaces(resortFromLiftie) {
  return function (dispatch) {
    let formattedPlaceName = resortFromLiftie.name.split(' ').join('+');
    return fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${formattedPlaceName}&inputtype=textquery&locationbias=point:${resortFromLiftie.ll[1]},${resortFromLiftie.ll[0]}&fields=formatted_address,rating,photos&key=AIzaSyAWV1qRc5xLad5NRq3NdE-8lHLTRVkDsuE`).then(
      response => response.json(),
      error => console.log("FAIL", error)
    ).then(function(placesResponse) {
      if(placesResponse.candidates) {
        let combinedResponses = Object.assign({}, resortFromLiftie, placesResponse.candidates[0]);
        var y = fetchResortPlacesPhoto(combinedResponses)
        y(dispatch);
      }
    })
  }
}

export function fetchResortPlacesPhoto(combinedResponses) {
  return function (dispatch){
  return fetch(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${combinedResponses.photos[0].photo_reference}&key=AIzaSyAWV1qRc5xLad5NRq3NdE-8lHLTRVkDsuE`).then(
    response => response.blob(),
    error => console.log("FAIL", error)
  ).then(function(image) {
    if (image) {
      let blobUrl = URL.createObjectURL(image);
      let finalCombination = Object.assign({}, combinedResponses, {photoLocalPath: blobUrl})
      dispatch(getLiftieResort(finalCombination))
    }
  })}
}
