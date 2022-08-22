import {  Text, View, Image, Button } from 'react-native';
import React from 'react';
import CladsLogo from '../../../assets/cladsLogo.png';
import EmailIcon from '../../../assets/GroupEmailIcon.png';
import emailIcon from '../../../assets/emailIcon.png';
import faceBookIcon from '../../../assets/facebookIcon.png';
import twitterIcon from '../../../assets/twitterIcon.png';
import instagramIcon from '../../../assets/instagramIcon.png';
import { EmailTemplateStyles } from '../../screen.styles/ResetPasswordAndLoginStyles';
import Toast from 'react-native-root-toast';


const EmailTemplate = ({navigation}) => {

    const NewPassword = ()=>{
navigation.navigate('NewPasswordForResetWithEmail')
    }

    return (
        <View style={EmailTemplateStyles.container}>

            <View style={EmailTemplateStyles.topView}>
                <Image
                    source={CladsLogo}
                    style={EmailTemplateStyles.obioma}
                />
                <Text style={EmailTemplateStyles.viewInBrowser}>View in browser</Text>
            </View>

            <View style={EmailTemplateStyles.emailIconView}>
                <Image
                    source={EmailIcon}
                    style={EmailTemplateStyles.emailIcon}
                />
            </View>

            <View style={EmailTemplateStyles.resetView}>
                <Text style={EmailTemplateStyles.resetHeader}> Reset Password</Text>
                <Text style={EmailTemplateStyles.hi}>Hi,</Text>
                <Text style={EmailTemplateStyles.almostThere}>
                    You're almost there. To finish resseting your password, please click on the reset button below.
                </Text>

                <View style={EmailTemplateStyles.button}>
                    <Button
                        title='RESET PASSWORD'
                        backgroundColor='#0066F5'
                        onPress={NewPassword}
                    />
                </View>
            </View>

            <View style={EmailTemplateStyles.bottomView}>
                <Text style={EmailTemplateStyles.stayInTouch}>Stay in touch</Text>
            </View>

            <View style={EmailTemplateStyles.socialIcons}>
                <Image
                    source={faceBookIcon}
                    style={EmailTemplateStyles.facebook}
                />

                <Image
                    source={twitterIcon}
                    style={EmailTemplateStyles.twitter}
                />

                <Image
                    source={instagramIcon}
                    style={EmailTemplateStyles.instagram}
                />

                <Image
                    source={emailIcon}
                    style={EmailTemplateStyles.email}
                />
            </View>

            <View style={EmailTemplateStyles.bottomText}>

                <Text style={EmailTemplateStyles.emailSent}>email sent by Clads</Text>
                <Text style={EmailTemplateStyles.copyright}>copyright 2020. All Rights Reserved</Text>

            </View>

        </View>
    );
};

export default EmailTemplate;

