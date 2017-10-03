import { fork } from 'redux-saga/effects';
import fetchWeatherSaga from './fetch-weather-saga';

export default function* root() {
  yield [
    fork(fetchWeatherSaga)
  ];
}
