import { Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import ValidatePassword from './fieldValidation/passwordValidation';
import { NewPasswordStyles } from '../../screen.styles/ResetPasswordAndLoginStyles';
import Toast from 'react-native-root-toast';

const NewPasswordForResetWithEmail = ({ navigation }) => {

    const [isSecureEntry, setIsSecureEntry] = useState(true)
    const pwVisbililtyIconName = (isSecureEntry) ? "visibility-off" : "visibility";
    const [newPassword, setNewPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('')

    const Login = () => {
        navigation.navigate('Login')
    };

    const ResetPassword = () => {
        if (ValidatePassword(newPassword)){
            if(newPassword === confirmedPassword){
                Toast.show('Success. Kindly click on the link sent to your mail.', {
                    duration: Toast.durations.LONG,
                  });
            }else{
                Toast.show('The new password does not match with the confirmation. Check and try again.', {
                    duration: Toast.durations.LONG,
                  });
            }
        }else{
            Toast.show('Your New Password is invalid. Should be at least 6 characters.', {
                duration: Toast.durations.LONG,
              });
        };
    }

    const passwordVisibility = () => {
        if (isSecureEntry == false) {
            setIsSecureEntry(true)
        } else {
            setIsSecureEntry(false)
        }
    }

    return (
        <View style={NewPasswordStyles.container}>
            <View style={NewPasswordStyles.forgotpasswordView}>
                <Text style={NewPasswordStyles.forgotPassword}>Forgot password</Text>
            </View>

            <View style={NewPasswordStyles.new_comfirmPassword}>

                <View style={NewPasswordStyles.newpwAndIcon}>

                    <TextInput style={NewPasswordStyles.newPassword}
                        placeholder='New Password'
                        textContentType="newPassword"
                        secureTextEntry={isSecureEntry}
                        value={newPassword}
                        onChangeText={(text) => setNewPassword(text)}
                    />

                    <View style={{ marginLeft: 35, }}>
                        <Icon
                            name={pwVisbililtyIconName}
                            type="material"
                            onPress={passwordVisibility}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 50 }}>

                    <TextInput style={NewPasswordStyles.confirmNewPw}
                        placeholder='Confirm New Password'
                        textContentType="newPassword"
                        secureTextEntry={isSecureEntry}
                        value={confirmedPassword}
                        onChangeText={(text) => setConfirmedPassword(text)}
                    />
                    <View style={{ marginLeft: 35, }}>

                        <Icon
                            name={pwVisbililtyIconName}
                            type="material"
                            onPress={passwordVisibility}
                        />
                    </View>
                </View>

            </View >

            <View style={NewPasswordStyles.button}>
                <Button
                    title='RESET PASSWORD'
                    onPress={ResetPassword}
                />
            </View>

            <View style={NewPasswordStyles.canRememberPassword}>
                <Text style={NewPasswordStyles.canRemember}>
                    I can remember my password
                </Text>
                <Text style={NewPasswordStyles.login} onPress={Login}>
                    Login
                </Text>
            </View>
        </View>
    );

};

export default NewPasswordForResetWithEmail;

