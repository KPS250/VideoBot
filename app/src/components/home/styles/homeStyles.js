import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../../utils/values/Colors';

export default (styles = EStyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: Colors.primary,
    paddingVertical: '10rem',
  },
  button: {
    width: '20rem',
    height: '20rem',
    right: 0,
    marginTop: '10rem',
  },
  searchInput: {
    width: '90%',
    height: '40rem',
    color: 'black',
    opacity: 0.8,
    paddingHorizontal: '16rem',
  },
  youtubeContainer: {
    alignSelf: 'stretch',
    height: '300rem',
  },
  emptyContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyMessage: {
    //paddingTop: '150rem',
    opacity: 0.7,
  },
  emptyImage:{
    width: '300rem',
    height: '260rem',
    resizeMode: 'contain',
  },
}));
