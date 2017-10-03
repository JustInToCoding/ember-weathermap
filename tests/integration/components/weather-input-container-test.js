import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('weather-input-container', 'Integration | Component | weather input container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('initialCity', 'Nijmegen');
  this.set('initialCountry', 'nl');

  // Template block usage:
  this.render(hbs`
    {{#weather-input-container initialCity=initialCity initialCountry=initialCountry as |city country|}}
      {{city}},{{country}}
    {{/weather-input-container}}
  `);

  assert.equal(this.$().text().trim(), 'Nijmegen,nl');
});
