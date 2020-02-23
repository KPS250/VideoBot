import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';
import {Strings} from '../../../utils/values/Strings';

export default (AppBar = ({
  title,
  mode,
  hideOptions,
  leftClick,
  rightClick,
}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Strings.statusBarColor}
        barStyle={Strings.statusBarStyle}
      />
      {/*
                <Icon
                size={24}
                color={Colors.white}
                name={ mode==1 ? 'menu' : 'arrow-back'}
                style={styles.leftIcon}
                onPress={()=> mode==1 ? leftClick(): Actions.pop()}
            />
                */}

      <Text style={styles.title}>{title}</Text>
      {/*!hideOptions &&
        <Icon
          size={24}
          color={Colors.white}
          name="more-vert"
          style={styles.rightIcon}
          onPress={() => rightClick()}
        />
      ) */}
    </View>
  );
});

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    top: 0,
    height: '56rem',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: 16,
    color: Colors.white,
    //fontFamily: Fonts.bold
  },
  leftIcon: {
    paddingLeft: '21rem',
    paddingRight: '14rem',
  },
  rightIcon: {
    position: 'absolute',
    right: 0,
    paddingRight: '16rem',
    paddingLeft: '16rem',
  },
});
