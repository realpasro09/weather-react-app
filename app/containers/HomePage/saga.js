/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  setWeatherData,
  setWeatherError,
  setWeatherDetail,
} from 'containers/HomePage/actions';

import request from 'utils/request';
import { makeSetSearchItem, makeGetWoeid } from 'containers/HomePage/selectors';
import { GET_WEATHER_DATA, GET_WEATHER_DETAIL } from './constants';

export function* getWeatherData() {
  const searchItem = yield select(makeSetSearchItem());
  const requestURL = `getWeatherSearch/${searchItem}`;

  try {
    const weatherItems = yield call(request, requestURL);
    yield put(setWeatherData(weatherItems));
  } catch (err) {
    yield put(setWeatherError(err));
  }
}

export function* getWeatherDetail() {
  const woeid = yield select(makeGetWoeid());
  const requestURL = `getWeatherDetail/${woeid}`;

  try {
    const weatherDetailValue = yield call(request, requestURL);
    yield put(setWeatherDetail(weatherDetailValue[0]));
  } catch (err) {
    yield put(setWeatherError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* weatherData() {
  yield takeLatest(GET_WEATHER_DATA, getWeatherData);
  yield takeLatest(GET_WEATHER_DETAIL, getWeatherDetail);
}
