import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import { Icon } from 'react-native-elements';
import Dropdown from '../../../assets/dropdownIcon.png'


const ResetWithPhone = () => {
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');
   


    return (
        <View style={styles.container}>
            <View style={styles.forgotpasswordView}>
                <Text style={styles.forgotPassword}>Forgot password</Text>
            </View>
            <View style={styles.viewLine}></View>

            <View style={styles.countryAndPhoneView}>

                <View style={styles.selectCountryView}>

                    <TouchableOpacity
                        onPress={() => setShow(false)}
                        style={styles.touchableOpacity}
                    >
                    
                        <CountryPicker
                            onSelect={(countryCode) =>  console.log(countryCode.callingCode[0])}
                            withCallingCode='true'   
                        />

                        <View style={{ marginLeft: 160, }}>
                            <Icon
                                name='chevron-down-outline'
                                type="ionicon"
                                color='#ADBACD'
                                //onPress={ }
                            />
                        </View>

                    </TouchableOpacity>

                    <View style={styles.viewLine}></View>

                </View>

                <View style={{ flexDirection: 'row', marginTop: 50 }}>

                    <TextInput style={styles.phoneNum}
                        placeholder='Phone Number'
                        textContentType="telephoneNumber"
                        placeholderTextColor='#F2F2F2'
                    />
                    <View style={{ marginLeft: 35 }}>
                        <Text style={styles.useEmail}>Use Email</Text>
                    </View>

                </View>
                <View style={styles.viewLine}></View>


            </View >

            <View style={styles.button}>
                <Button
                    title='SEND RESET CODE'
                />
            </View>

            <View style={styles.canRememberPassword}>
                <Text style={styles.canRemember}>
                    I can remember my password,
                </Text>
                <Text style={styles.login}>
                    Login
                </Text>


            </View>

        </View>
    );
};

export default ResetWithPhone;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 5
    },
    forgotPassword: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 30,
        marginLeft: 27,
        marginRight: 133,
        marginBottom: 59,
        marginTop: 44,
        // fontFamily: 'poppins'
    },
    forgotpasswordView: {
        height: 133,
        width: 360,
    },
    countryAndPhoneView: {
        alignItems: 'baseline'
    },
    selectCountry: {
        marginLeft: 30,
        width: 200,
        color: '#ADBACD',
        fontWeight: '400',
        fontSize: 12,
        fontStyle: 'normal',
        lineHeight: 18,
        //fontFamily:'Poppins'


    },
    phoneNum: {
        marginLeft: 30,
        width: 190,

    },

    button: {
        marginHorizontal: 24,
        marginTop: 70,
        marginBottom: 28
    },
    canRememberPassword: {
        flexDirection: 'row',
        marginTop: 28,
    },
    login: {
        marginLeft: 30,
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: '#0066F5'
        //fontFamily: 'Poppins'
    },
    canRemember: {

        marginLeft: 48,
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
        //fontFamily: 'Poppins'
    },
    selectCountryView: {
        flexDirection: 'row',

    },

    useEmail: {
        marginRight: 20,
        color: '#0066F5',
        fontWeight: '400',
        fontSize: 12,
        fontStyle: 'normal',
        //fontFamily:'Poppins'
    },
    touchableOpacity: {
        width: '80%',
        height: 40,
       // backgroundColor: '#FFFFFF',
        padding: 10,
        flexDirection: 'row',
        marginLeft: 20
    },
    viewLine:{
        height: 2,
        backgroundColor:'#C4C4C480',
    }
});

