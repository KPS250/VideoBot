import React, {Component} from 'react';
import Voice from '@react-native-community/voice';
import styles from './styles/homeStyles';
import SafeArea from '../commons/SafeArea';
import {Text, View} from 'react-native';
import YouTube from 'react-native-youtube';
import {connect} from 'react-redux';
import {youtubeResults} from '../../actions/Actions';
import {getYoutubeSearchResults} from '../../../utils/network/Requests';
import {Strings} from '../../../utils/values/Strings';
import SearchBar from './SearchBar';
import BusyError from '../commons/errors/BusyError';
import Empty from './Empty';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      textMode: false,
      searchInputEditable: false,
      start: false,
      results: [],
      partialResults: [],
    };

    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
  }

  componentWillUnmount() {
    //destroy the process after switching the screen
    Voice.destroy().then(Voice.removeAllListeners);
  }

  componentDidMount() {
    /*
    setTimeout(() => {
      console.log('Settimeout')
      this.props.youtubeResults('DXUAyRRkI6k');
    }, 5000);
    */
  }

  onSpeechStart = e => {
    //Invoked when .start() is called without error
    console.log('onSpeechStart', e);
    this.setState({start: true});
  };

  onSpeechEnd = e => {
    //Invoked when SpeechRecognizer stops recognition
    console.log('onSpeechEnd', e);
    this.setState({start: false});
  };

  onSpeechError = e => {
    //Invoked when an error occurs.
    console.log('onSpeechError', e.error);
    alert(JSON.stringify(e.error.code));
  };

  onSpeechResults = e => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResults', e.value);
    this.setState({results: e.value, start: false, searchText: e.value[0]});
    this.searchYoutube(e.value[0]);
  };

  searchYoutube = text => {
    let delayTimer;
    clearTimeout(this.delayTimer);
    this.delayTimer = setTimeout(() => {
      console.log('Calling Youtube API- ' + text);
      //this.setState({searchText:text, searchInputEditable: true)};
      this.props.getYoutubeSearchResults(text);
      this._destroyRecognizer();
    }, 400);
  };

  onSpeechPartialResults = e => {
    //Invoked when any results are computed
    console.log('onSpeechPartialResults', e.value);
    this.setState({partialResults: e.value});
  };

  onSpeechVolumeChanged = e => {
    //Invoked when pitch that is recognized changed
    console.log('onSpeechVolumeChanged', e);
  };

  _startRecognizing = async () => {
    console.log('_startRecognizing');
    if (!this.state.start) {
      this.setState({
        searchText: '',
        searchInputEditable: false,
        start: true,
        results: [],
        partialResults: [],
      });

      try {
        await Voice.start('en-US');
      } catch (e) {
        console.error(e);
      }
    } else {
      this._stopRecognizing();
    }
  };

  _stopRecognizing = async () => {
    //Stops listening for speech
    console.log('_stopRecognizing');
    this.setState({
      searchText: '',
      searchInputEditable: false,
      start: false,
    });

    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  _cancelRecognizing = async () => {
    //Cancels the speech recognition
    console.log('_cancelRecognizing');
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  _destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    console.log('_destroyRecognizer');
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    this.setState({
      //searchInputEditable: true,
      start: false,
      results: [],
      partialResults: [],
    });
  };

  changeSearchText = searchText => {
    this.setState({searchText: searchText, searchInputEditable: true});
  };

  render() {
    return (
      <SafeArea>
        <BusyError />
        <View style={styles.container}>
          <SearchBar
            start={this.state.start}
            searchText={this.state.searchText}
            searchInputEditable={this.state.searchInputEditable}
            onChange={this.changeSearchText}
            onMicPress={this._startRecognizing}
          />
          {this.props.homeReducer.youtubeResults != null && (
            <YouTube
              videoId={this.props.homeReducer.youtubeResults} // The YouTube video ID
              play // control playback of video with true/false
              //fullscreen // control whether the video should play in fullscreen or inline
              //loop // control whether the video should loop when ended
              onReady={e => this.setState({isReady: true})}
              onChangeState={e => this.setState({status: e.state})}
              onChangeQuality={e => this.setState({quality: e.quality})}
              onError={e => this.setState({error: e.error})}
              style={styles.youtubeContainer}
            />
          )}
          {this.props.homeReducer.youtubeResults == null && <Empty />}
        </View>
      </SafeArea>
    );
  }
}

const mapStateToProps = state => {
  return {
    homeReducer: state.homeReducer,
  };
};

const mapDispatchToProps = {
  getYoutubeSearchResults,
  youtubeResults,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
