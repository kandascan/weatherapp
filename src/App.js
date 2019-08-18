import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import CurrentWeatherComponent from './components/CurrentWeatherComponent';
import CalculatorResult from './components/Calc/CalculatorResult';

function App() {
  return (
  <Provider store={ store }>
    <BrowserRouter>
      <Route exact path="/" component={CurrentWeatherComponent} />
      <Route exact path="/calc" component={CalculatorResult} />
    </BrowserRouter>
  </Provider>
  );
}

export default App;
