import { call, put, takeLatest } from 'redux-saga/effects'
import { getWeather } from '../utilities/api';

const fetchWeather = function* (action) {
   try {
      const weather = yield call(getWeather, action.payload.latitude, action.payload.longitude);
      yield put({type: 'GET_WEATHER_SUCCEEDED', weather});
   } catch (e) {
      yield put({type: 'GET_WEATHER_FAILED', message: e.message});
   }
}

const fetchWeatherSaga = function* () {
  yield takeLatest('WEATHER_FETCH_REQUESTED', fetchWeather);
};

export default fetchWeatherSaga;
