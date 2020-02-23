import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import Splash from '../src/components/home/Splash';
import Home from '../src/components/home/Home';

const AppRouting = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="home" component={Home} hideNavBar />
        <Scene key="splash" component={Splash} hideNavBar />
      </Stack>
    </Router>
  );
};

export default AppRouting;
