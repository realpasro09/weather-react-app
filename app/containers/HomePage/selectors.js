import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSearchItem = state =>
  state.global.searchTerm || initialState.searchTerm;
const selectWeatherData = state =>
  state.global.weatherData || initialState.weatherData;
const selectWeatherDetail = state =>
  state.global.weatherDetail || initialState.weatherDetail;
const selectLoading = state => state.global.loading || initialState.loading;
const selectWoeid = state => state.global.woeid || initialState.woeid;

const makeSetSearchItem = () =>
  createSelector(
    selectSearchItem,
    state => state,
  );

const makeSelectLoading = () =>
  createSelector(
    selectLoading,
    loading => loading,
  );

const makeGetWeatherData = () =>
  createSelector(
    selectWeatherData,
    weatherData => weatherData,
  );

const makeGetWoeid = () =>
  createSelector(
    selectWoeid,
    woeid => woeid,
  );

const makeGetWeatherDetail = () =>
  createSelector(
    selectWeatherDetail,
    weatherDetail => weatherDetail,
  );

export {
  selectSearchItem,
  makeSetSearchItem,
  selectLoading,
  makeSelectLoading,
  selectWeatherData,
  makeGetWeatherData,
  selectWoeid,
  makeGetWoeid,
  selectWeatherDetail,
  makeGetWeatherDetail,
};
