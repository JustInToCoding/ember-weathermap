import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('weather-input', 'Integration | Component | weather input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('city', 'Nijmegen');
  this.set('country', 'nl');
  this.on('myAction', function(city, country) {
    this.set('city', city);
    this.set('country', country);
   });

  // Template block usage:
  this.render(hbs`
    {{weather-input city=city country=country onUpdate=(action "onUpdate")}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
