import {
  CHANGE_SEARCH_TERM,
  CHANGE_WOEID,
  GET_WEATHER_DATA,
  SET_WEATHER_DATA,
  SET_WEATHER_DETAIL,
  GET_WEATHER_DETAIL,
} from './constants';

export function changeSearchTerm(searchTerm) {
  return {
    type: CHANGE_SEARCH_TERM,
    searchTerm,
  };
}

export function changeWoeid(woeid) {
  return {
    type: CHANGE_WOEID,
    woeid,
  };
}

export function getWeatherData(searchTerm) {
  return {
    type: GET_WEATHER_DATA,
    searchTerm,
  };
}

export function getWeatherDetail(woeid) {
  return {
    type: GET_WEATHER_DETAIL,
    woeid,
  };
}

export function setWeatherData(weatherData) {
  return {
    type: SET_WEATHER_DATA,
    weatherData,
  };
}

export function setWeatherDetail(weatherDetail) {
  return {
    type: SET_WEATHER_DETAIL,
    weatherDetail,
  };
}

export function setWeatherError(weatherError) {
  return {
    type: SET_WEATHER_DATA,
    weatherError,
  };
}
