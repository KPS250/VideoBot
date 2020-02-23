import React from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Modal from 'react-native-modal';

export default (InternetError = ({isVisible, toggle}) => {
  return (
    <Modal
      //animationType='fade'
      isVisible={isVisible}
      backdropColor={'black'}
      backdropOpacity={0.5}
      onBackButtonPress={() => toggle()}
      onBackdropPress={() => toggle()}
      useNativeDriver={true}
      animationInTiming={300}
      animationOutTiming={600}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={600}
      hideModalContentWhileAnimating={true}>
      <View style={styles.modal}>
        <Text>No Internet</Text>
      </View>
    </Modal>
  );
});

const styles = EStyleSheet.create({
  modal: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '25rem',
    paddingBottom: '35rem',
    borderRadius: '10rem',
  },
});
