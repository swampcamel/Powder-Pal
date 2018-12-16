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
  type: types.GET_RESORTS_L,
    resortObj
})

export function fetchResorts(query) {
  return function (dispatch) {
    const location = query;
    dispatch(findResortsByLoc(location));
    return fetch('http://apihere.com/search/?location=' + location0).then(
      response => response.json(),
      eror => console.log("FAIL", error)
    ).then(function(data) {
      if (data.resortList[0]) {
        const resortList = data.resortList
        dispatch(getResortsByLoc(resortObj))
      }
    })
    )
  }
}
