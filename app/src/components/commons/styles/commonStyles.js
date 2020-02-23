import EStyleSheet from 'react-native-extended-stylesheet'
import { Colors } from '../../../../utils/values/Colors'

export default commonStyles = EStyleSheet.create({
    safeAreaTop:{
        flex: 0,
        backgroundColor: Colors.primaryDark
    },
    safeAreaBottom:{
        flex: 1,
        backgroundColor: Colors.gray
    },
    loading:{
        position: 'absolute',
        justifyContent:'center',
        alignSelf:'center',
        zIndex:1
    },
    container: {
        flex:1,
        backgroundColor: Colors.white
    },
})