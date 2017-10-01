import { fork } from 'redux-saga/effects';
import fetchWeatherSaga from './fetchWeather';

export default function* root() {
  yield [
    fork(fetchWeatherSaga)
  ];
}
