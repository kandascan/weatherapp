import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FormComponent from './components/FormComponent';
import CurrentWeatherComponent from './components/CurrentWeatherComponent';
import AlertComponent from './components/AlertComponent';

function App() {
  return (
  <Provider store={ store }>
    <FormComponent />
    <AlertComponent />
    <CurrentWeatherComponent />
  </Provider>
  );
}

export default App;
