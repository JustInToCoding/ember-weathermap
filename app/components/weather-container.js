import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { connect } from 'ember-redux';

var stateToComputed = (state) => {
  return {
    weather: state.weather
  };
};

var dispatchToActions = (dispatch) => {
  return {
    fetchWeather: (latitude, longitude) => dispatch({type: 'WEATHER_FETCH_REQUESTED', payload: { latitude, longitude }})
  };
};

var WeatherContainer = Ember.Component.extend({
  layout: hbs`
    {{yield weather (action "fetchWeather")}}
  `
});

export default connect(stateToComputed, dispatchToActions)(WeatherContainer);
