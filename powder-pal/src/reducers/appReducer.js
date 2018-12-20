import constants from './../constants';
const {types} = constants;

const appReducer = (state = {filteredResults: []}, action) => {
  let newResorts;
  let newState;
  let newPlaceInfo;
  let newPlacePhoto;
  switch (action.type) {

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

    case types.REFRESH_FILTERED_RESULTS:
      newState = Object.assign({}, state, {
        filteredResults: []
      });
      return newState;

    default:
      return state;
  }
}

export default appReducer;
