import React from 'react'
import {  BrowserRouter as Router } from 'react-router-dom';

import { getRoutes } from './utils/routes';

const App = () => {

  const routes = getRoutes()
  
  return ( <Router> { routes } </Router> )

}

export default App
