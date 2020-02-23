import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles/homeStyles';
import {Strings} from '../../../utils/values/Strings';

export default (Empty = ({label}) => {
  return (
    <View style={styles.emptyContainer}>
      <Image
        style={styles.emptyImage}
        source={require('../../../assets/images/empty.jpg')}
      />
      <Text style={styles.emptyMessage}>{Strings.emptyMessage}</Text>
    </View>
  );
});
