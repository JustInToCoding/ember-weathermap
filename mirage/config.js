export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'https://api.openweathermap.org/data';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/2.5';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.get('/weather', () => {
    return {
      "coord": {
        "lon": 23,
        "lat": 51
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 284.277,
        "pressure": 1000.5,
        "humidity": 98,
        "temp_min": 284.277,
        "temp_max": 284.277,
        "sea_level": 1028.59,
        "grnd_level": 1000.5
      },
      "wind": {
        "speed": 3.88,
        "deg": 206.506
      },
      "rain": {
        "3h": 3.9525
      },
      "clouds": {
        "all": 92
      },
      "dt": 1507054375,
      "sys": {
        "message": 0.0037,
        "country": "PL",
        "sunrise": 1507005174,
        "sunset": 1507046382
      },
      "id": 858785,
      "name": "Województwo Lubelskie",
      "cod": 200
    }
  });
}
