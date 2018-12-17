import constants from './../constants';
const {types} = constants;

const appReducer = (state = {}, action) => {
  let newResorts;
  let newState;
  let newPlaceInfo;
  let newPlacePhoto;
  switch (action.type) {
    // case types.FIND_RESORTS_L:
    //   newResorts = {
    //     isFetching: true,
    //     resorts
    //   }
    case types.GET_RESORTS_L:
      newResorts = Object.assign({}, state, {
        isFetching: false,
        resorts: action.resorts
      });
      console.log(newResorts)
      newState = Object.assign({}, state, newResorts);
      return newState;

    case types.GET_PLACE_INFO:
      newPlaceInfo = Object.assign({}, state, {
        isFetching: false,
        placeCandidates: action.placeCandidates
      });
      console.log(newPlaceInfo)
      newState = Object.assign({}, state, newPlaceInfo);
      return newState;

    case types.GET_PLACE_PHOTO:
      newPlacePhoto = Object.assign({}, state, {
        isFetching: false,
        placePhotoURL: action.placePhotoURL
      });
      console.log(newPlacePhoto);
      newState = Object.assign({}, state, newPlacePhoto);
      return newState;

    default:
      return state;
  }
}

export default appReducer;
