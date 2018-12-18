import constants from './../constants';
import Firebase from 'firebase';

const {types} = constants;
const {firebaseConfig} = constants;

Firebase.initializeApp(firebaseConfig);
const tickets = Firebase.database().ref('users');
console.log(tickets)

export const findResortsByLoc = (location) => ({
  type: types.FIND_RESORTS_L,
  location
});

export const getResortsByLoc = (resortObj) => ({
  // or each property, which is:
  // location: string
  // distance: string
  // openLiftStatus: string
  // closedLiftStatus: string
  // starRating: number
  // reviewArrayLength: number
  // avgCost: array[number]
  // links: array[linkObject]
  // condtions: array[conditionObject]
  // runs: array[runObject]
  // imageUrl: string

  // Actual Structure of Weather Unlocked return Object:
  //       {
    //     "resortid": 333005,
    //     "resortname": "Courchevel",
    //     "resortcountry": "France",
    //     "newsnow_cm": 0,
    //     "newsnow_in": 0,
    //     "lowersnow_cm": 65,
    //     "lowersnow_in": 25.6,
    //     "uppersnow_cm": 142,
    //     "uppersnow_in": 55.9,
    //     "pctopen": 60,
    //     "lastsnow": "17/12/2018",
    //     "reportdate": "17/12/2018",
    //     "reporttime": "12:02",
    //     "conditions": "Fresh snowfall"
    // }

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
  resortStatus: liftieData
})

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
        console.log(resort);
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
    console.log(liftieData)
  })
}

export function fetchResortPlacesData(dispatch) {
  return fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Courchevel%20France&inputtype=textquery&fields=photos,rating,geometry,name,place_id,formatted_address&key=AIzaSyAWV1qRc5xLad5NRq3NdE-8lHLTRVkDsuE&').then(
    response => response.json(),
    error => console.log("FAIL", error)
  ).then(function(placesData) {
    console.log(placesData)
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
      console.log(blobUrl);
      dispatch(getPlacePhotoURL(blobUrl));
    }
  })
}
