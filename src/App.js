import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CurrentWeatherComponent from './components/CurrentWeatherComponent';

function App() {
  return (
  <Provider store={ store }>
    <CurrentWeatherComponent />
  </Provider>
  );
}

export default App;
