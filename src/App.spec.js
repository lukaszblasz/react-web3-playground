import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('comparision', ()=> {
  var app = new App();
  expect(app.exampleFunction()).toBe(1);
});
