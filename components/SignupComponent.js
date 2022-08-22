import { View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from '../screen.styles.js/Signup.styles';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './util';

const { DEEP_SKY_BLUE, PLACEHOLDER_COLOR, VISIBILITY_TOGGLE_COLOR } = colors;

export default function SignupComponent({ onChange, onSubmit }) {
    // manage states
    const navigation = useNavigation();
    const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);
    const [securePassword, setSecurePassword] = useState(true);

    const navigateToLogin = () => navigation.navigate("LoginWithEmail");

    return (
        <View style={styles.container} >
        <StatusBar style='auto' backgroundColor = {DEEP_SKY_BLUE} translucent = {true} />
            <Text style={styles.header}>Create an account</Text>
            <Text style={styles.subHeader}>Let's get to know you</Text>

            <TextInput
                style={styles.input}
                onChangeText={(value) => onChange({name: 'firstName', value})}
                placeholder="First Name"
                placeholderTextColor={PLACEHOLDER_COLOR}
                underlineColorAndroid={'transparent'}
            />
            <TextInput
                style={styles.input}
                onChangeText={(value) => onChange({name: 'lastName', value})}
                placeholder="Last Name"
                placeholderTextColor={PLACEHOLDER_COLOR}
                underlineColorAndroid={'transparent'}
            />
            <TextInput
                style={styles.input}
                onChangeText={(value) => onChange({name: 'otherName', value})}
                placeholder="Other Name"
                placeholderTextColor={PLACEHOLDER_COLOR}
                underlineColorAndroid={'transparent'}
            />

            <TextInput
                style={styles.input}
                onChangeText={(value) => onChange({name: 'email', value})}
                onSubmitEditing={onSubmit}
                keyboardType="email-address"
                placeholder="Email Address"
                placeholderTextColor={PLACEHOLDER_COLOR}
                underlineColorAndroid={'transparent'}
            />
            <View style={styles.passwordView}>
                <TextInput
                style={styles.passwordInput}
                onChangeText={(value) => onChange({name: 'password', value})}
                placeholder="Password"
                placeholderTextColor={PLACEHOLDER_COLOR}
                secureTextEntry={securePassword}
                underlineColorAndroid={'transparent'}
                />
                <Ionicons 
                style={styles.visibilityIcon} 
                onPress={() => setSecurePassword((prev) => !prev)} 
                name={securePassword? "ios-eye-off-sharp" : "ios-eye-sharp" } 
                size={24} 
                color={VISIBILITY_TOGGLE_COLOR}/>
            </View>
            
            <View style={styles.passwordView}>
                <TextInput
                style={styles.passwordInput}
                onChangeText={(value) => onChange({name: 'confirmPassword', value})}
                placeholder="Confirm Password"
                placeholderTextColor={PLACEHOLDER_COLOR}
                secureTextEntry={secureConfirmPassword}
                underlineColorAndroid={'transparent'}
                />
                <Ionicons 
                onPress={() => setSecureConfirmPassword((prev) => !prev)} 
                name={secureConfirmPassword? "ios-eye-off-sharp" : "ios-eye-sharp" } 
                size={24} 
                color={VISIBILITY_TOGGLE_COLOR}/>
            </View>
        
            <TouchableOpacity style={styles.touchButton} onPress={onSubmit} >
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>

            <Text style={styles.footer}>
                Have an account?
                <Text style={styles.loginClick} onPress={navigateToLogin}>   Login</Text>
            </Text>
        </View>
    );
}