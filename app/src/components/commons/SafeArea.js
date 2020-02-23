import React, {Component, Fragment} from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import commonStyles from './styles/commonStyles';

export default class SafeArea extends Component {
  render() {
    return (
      <Fragment>
        <SafeAreaView style={commonStyles.safeAreaTop} />
        <StatusBar  barStyle="light-content" />
        <SafeAreaView style={commonStyles.safeAreaBottom}>
          <View style={commonStyles.container}>{this.props.children}</View>
        </SafeAreaView>
      </Fragment>
    );
  }
}
