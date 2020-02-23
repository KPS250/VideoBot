import React from 'react';
import {View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Colors} from '../../../utils/values/Colors';
import styles from './styles/homeStyles';
import {Strings} from '../../../utils/values/Strings';
import {Urls} from '../../../utils/values/Urls';

export default (SearchBar = ({
  start,
  searchText,
  searchInputEditable,
  onChange,
  onMicPress,
}) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        editable={searchInputEditable}
        style={styles.searchInput}
        placeholderTextColor={Colors.white}
        placeholder={start ? Strings.listening : Strings.searchVideo}
        value={searchText}
        onChangeText={searchText => onChange(searchText)}
      />
      <TouchableOpacity onPress={() => onMicPress()}>
        <Image
          style={[styles.button, {tintColor: start ? 'blue' : 'white'}]}
          source={require('../../../assets/images/microphone.png')}
        />
      </TouchableOpacity>
      {/*searchText != '' && (
        <TouchableOpacity onPress={() => onChange('')}>
          <Image
            style={[styles.button, {tintColor: 'white'}]}
            source={require('../../../assets/images/close.png')}
          />
        </TouchableOpacity>
      )*/}
    </View>
  );
});
