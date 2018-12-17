import * as types from './../constants/ActionTypes';

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
    resortObj
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
        dispatch(getResortsByLoc(resort))
      }
    })
    
  }
}
