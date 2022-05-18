import produce from 'immer';
import {
  CHANGE_SEARCH_TERM,
  SET_WEATHER_DATA,
  CHANGE_WOEID,
  SET_WEATHER_DETAIL,
  GET_WEATHER_DETAIL,
  GET_WEATHER_DATA,
} from './constants';

// The initial state of the App
export const initialState = {
  searchTerm: '',
  weatherData: [],
  weatherDetail: [],
  loading: false,
  woeid: 0,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, x => {
    switch (action.type) {
      case CHANGE_SEARCH_TERM:
        x.searchTerm = action.searchTerm;
        break;
      case CHANGE_WOEID:
        x.woeid = action.woeid;
        break;
      case GET_WEATHER_DATA:
        x.loading = true;
        break;
      case GET_WEATHER_DETAIL:
        x.loading = true;
        break;
      case SET_WEATHER_DATA:
        x.loading = false;
        x.weatherData = action.weatherData;
        break;
      case SET_WEATHER_DETAIL:
        x.loading = false;
        x.weatherDetail = action.weatherDetail;
        break;
    }
  });

export default homeReducer;
