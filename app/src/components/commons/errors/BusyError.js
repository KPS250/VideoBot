import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import ApiError from './ApiError';
import InternetError from './InternetError';
import {
  toggleLoading,
  toggleInternet,
  toggleApiError,
} from '../../../actions/Actions';
import commonStyles from '../styles/commonStyles';
import {Colors} from '../../../../utils/values/Colors';

class BusyError extends Component {
  render() {
    return (
      <View>
        <ApiError
          isVisible={this.props.busyErrorReducer.apiError}
          toggle={this.props.toggleApiError}
        />
        <InternetError
          isVisible={this.props.busyErrorReducer.noInternet}
          toggle={this.props.toggleInternet}
        />
        <ActivityIndicator
          style={commonStyles.loading}
          animating={this.props.busyErrorReducer.isLoading}
          size="small"
          color={Colors.primary}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state.busyErrorReducer)
  return {
    busyErrorReducer: state.busyErrorReducer,
  };
};

const mapDispatchToProps = {
  toggleLoading,
  toggleInternet,
  toggleApiError,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BusyError);
