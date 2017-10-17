import React from 'react';
import { render } from 'react-dom';
import Routing from './routes';

const rootElement = document.getElementById('root');
render(
  <Routing />,
  rootElement
);