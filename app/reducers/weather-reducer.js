var initialState = {
  loading: false,
  error: false,
  message: null,
  weather: null
}

var weather = (state, action) => {
  switch(action.type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'GET_WEATHER_SUCCEEDED':
      return { ...state, ...action.weather, error: false, loading: false };
    case 'GET_WEATHER_FAILED':
      return { ...state, error: true, message: action.message, loading: false };
    default:
      return state || initialState;
  }
}

export default weather;
