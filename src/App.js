import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
// import HomePage from './pages/home_page';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
