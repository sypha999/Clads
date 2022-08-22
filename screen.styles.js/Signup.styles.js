import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../components/util';

const { DEEP_SKY_BLUE, WHITE } = colors;
const {deviceHeight, deviceWidth} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: DEEP_SKY_BLUE,
      padding: 20,
      height: deviceHeight,
      width: deviceWidth
    },
    header : {
      height: 27,
      marginTop: 70,
      color: WHITE,
      fontFamily: 'Poppins_400Regular',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 18,
      lineHeight: 27,
    },
    subHeader: {
      height: 21,
      marginTop: 10,
      marginBottom: 20,
      color: WHITE,
      fontFamily: 'Poppins_400Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 21,
    },
    input: {
      fontFamily: 'Roboto_400Regular',
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 16,
      marginTop: 24,
      marginBottom: 10,
      color: WHITE,
      borderBottomWidth: 0.5,
      borderBottomColor: WHITE,
    },
    passwordView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      marginBottom: 10,
      borderBottomWidth: 0.5,
      borderBottomColor: WHITE,
      width: deviceWidth,
    },
    passwordInput: {
      fontFamily: 'Roboto_400Regular',
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 16,
      color: WHITE,
      width: 150,
    },
    touchButton: {
      backgroundColor: WHITE,
      height: 42,
      marginTop: 60,
      width: '95%',
      borderRadius: 5,
      height: 42,
      alignSelf: 'center',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: DEEP_SKY_BLUE,
      fontSize: 16,
      fontWeight: 'bold',
      fontStyle: 'normal',
      textAlign: 'center',
    },
    picker: {
      backgroundColor: DEEP_SKY_BLUE,
      borderBottomWidth: 0.5,
      borderBottomColor: WHITE,
      marginBottom: 20,
    },
    footer: {
      color: WHITE,
      fontSize: 14,
      textAlign: 'center',
      fontFamily: 'Poppins_400Regular',
      fontWeight: 'normal',
      fontStyle: 'normal',
      display: 'flex',
      padding: 5,
      position: 'relative',
      top: 8,
  
    },
    loginClick: {
      color: WHITE,
      fontFamily: 'Poppins_400Regular',
      fontWeight: 'bold',
      fontStyle: 'normal',
    }

});
