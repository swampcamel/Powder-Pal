import constants from './../constants';
const {types} = constants;

const appReducer = (state = {filteredResults: []}, action) => {
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
      newState = Object.assign({}, state, newResorts);
      return newState;

    case types.GET_PLACE_INFO:
      newPlaceInfo = Object.assign({}, state, {
        isFetching: false,
        placeCandidates: action.placeCandidates
      });
      newState = Object.assign({}, state, newPlaceInfo);
      return newState;

    case types.GET_PLACE_PHOTO:
      newPlacePhoto = Object.assign({}, state, {
        isFetching: false,
        placePhotoURL: action.placePhotoURL
      });
      newState = Object.assign({}, state, newPlacePhoto);
      return newState;

    case types.GET_LIFTIE_INFO:
      newState = Object.assign({}, state, {
        liftieData: action.liftieData
      });
      return newState;

    case types.GET_USER_GEO:
      newState = Object.assign({}, state, {
        isFetching: false,
        userGeo: action.userGeo
      });
      return newState;

    case types.GET_LIFTIE_RESORT:
      newState = Object.assign({}, state, {
        isFetching: false,
        filteredResults: [...state.filteredResults, action.liftieResortInfo]
      });
      return newState;
      
    default:
      return state;
  }
}

export default appReducer;
