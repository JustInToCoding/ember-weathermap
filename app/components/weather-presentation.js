import Ember from 'ember';

export default Ember.Component.extend({

  didReceiveAttrs() {
    this._super(...arguments);

  },

  didInsertElement() {
    this._super(...arguments);
    this.get('fetchWeather')(51, 23); // Run for the first time
    this.set('timer', setInterval(() => {
      this.get('fetchWeather')(51, 23);
    }, 60 * 1000 * 10)); // Run once every 10 minutes
  },

  willDestroyElement() {
    if(this.get('timer')) {
      clearInterval(this.get('timer'));
    }
  }
});
