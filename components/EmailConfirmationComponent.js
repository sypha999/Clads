import { View, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../screen.styles.js/EmailConfirmation.styles';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function EmailConfirmation() {
    const navigation = useNavigation(); 

    const navigateToLoginScreen = () => navigation.navigate('LoginWithEmail');
    const openBrower = () => {
        // Logic to open confirmation page in browser
    }

    return (
        <View style={styles.container}>
            <StatusBar style='auto' translucent = {true} />
            <View styles={styles.pageContent}>

                <View style={styles.headerView}>
                    <Image source={require('../assets/obiomaCladsIcon.png')} style={styles.obiomaIcon} />
                    <TouchableOpacity onPress={openBrower}>
                        <Text style={styles.viewInBrowser} >View in browser</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.emailIconView}>
                    <Image source={require('../assets/emailSentIcon.png')} style={styles.emailIcon} />
                </View>

                <View style={styles.confirmationView}>
                    <Text style={styles.confirmationHeader}> Email Confirmation</Text>
                    <Text style={styles.confirmationMessage}>
                        Hey Ijeoma, you are almost ready to start using Clads. Simply click the blue button below to verify your address
                    </Text>
                    
                    <TouchableOpacity style={styles.button} onPress={navigateToLoginScreen}>
                        <Text style={styles.buttonText}>Verify Email Address</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomView}>
                    <Text re style={styles.stayInTouch}>Stay in touch</Text>
                </View>

                <View style={styles.socialIcons}>
                    <Image source={require('../assets/facebookIcon.png')} />
                    <Image source={require('../assets/twitterIcon.png')} style={styles.twitter} />
                    <Image source={require('../assets/instagramIcon.png')} style={styles.instagram} />
                    <Image source={require('../assets/emailIcon.png')} style={styles.email} />
                </View>

                <View style={styles.bottomText}>
                    <Text style={styles.emailSent}>email sent by Obioma</Text>
                    <Text style={styles.copyright}>copyright 2020. All Rights Reserved</Text>
                </View>
                
            </View>
        </View>
  );
}