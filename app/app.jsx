import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

// Load Foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Boilerplate3 Project</p>,
  document.getElementById('app')
);
