import React, {Component} from 'react';
import AppRouting from './app/utils/Router';
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from 'react-redux';
import {store} from './app/src/store/index';

// Extended Style Sheet Configuration
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 360});

export default class App extends Component {
  render() {
    // Disabling YellowBox
    console.disableYellowBox = true;

    return (
      <Provider store={store}>
        <AppRouting />
      </Provider>
    );
  }
}
