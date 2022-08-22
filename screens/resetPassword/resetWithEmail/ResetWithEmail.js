import { Text, View, TextInput, Button} from 'react-native';
import React,{useState} from 'react';
import ValidateEmail from './fieldValidation/EmailValidation';
import { ResetWithEmailStyles } from '../../screen.styles/ResetPasswordAndLoginStyles';
import Toast from 'react-native-root-toast';

const ResetWithEmail = ({navigation}) => {
    const [userEmail, setUserEmail] = useState('')
    const GotoLogin = () =>{
        navigation.replace('Login')
    };

    const ResetTemplate = ()=>{
        if(ValidateEmail(userEmail)){
            navigation.navigate('EmailTemplate')
        }else{
            Toast.show('Inavid email. Please check and try again', {
                duration: Toast.durations.LONG,
              });
        } 
    }

    return (
        <View style={ResetWithEmailStyles.container}>
            <View style={ResetWithEmailStyles.forgotpasswordView}>
                <Text style={ResetWithEmailStyles.forgotPassword}>Forgot password</Text>
            </View>
            <View style={ResetWithEmailStyles.emailOrPhone}>
                <TextInput style={ResetWithEmailStyles.emailaddress}
                    placeholder='Email Address' 
                    value={userEmail}
                    onChangeText={(text) => setUserEmail(text)}
                />
            </View >

            <View style={ResetWithEmailStyles.viewDemacate}></View>
            <View style={ResetWithEmailStyles.button}>
                <Button
                    title='SUBMIT'
                    onPress={ResetTemplate}
                />
            </View>

            <View style={ResetWithEmailStyles.canRememberPassword}>
                <Text style={ResetWithEmailStyles.canRemember}>
                    I can remember my password
                    </Text>
                <Text style={ResetWithEmailStyles.login} onPress={GotoLogin}>
                    Login
                </Text>

            </View>

        </View>
    );
};

export default ResetWithEmail;

