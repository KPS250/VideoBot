import React, {Component} from 'react';
import SafeArea from '../commons/SafeArea';
import {Actions} from 'react-native-router-flux';

export default class Splash extends Component {
  componentDidMount() {
    Actions.home();
  }

  render() {
    return <SafeArea />;
  }
}
