import { StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width

 export const LoginWithEmailStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#0066F5'
    },
    topView: {
        height: 130,
        marginTop: 40,
    },
    welcome: {
        color: "#FFFFFF",
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 27,
        marginLeft: 20,
        marginTop: 40,
        marginBottom: 9,

    },
    continue: {
        color: "#FFFFFF",
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        marginLeft: 20,
    },
    touchableOpacity: {
        height: 42,
        width: deviceWidth - 30,
        backgroundColor: '#FFFFFF',
        marginLeft: 18,
        borderRadius: 5,
    },
    touchableOpacityForLogin: {
        height: 42,
        width: deviceWidth - 30,
        backgroundColor: '#FFFFFF',
        marginLeft: 18,
        borderRadius: 5,
        marginTop: 30
    },
    buttonView: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    googleLogog: {
        marginLeft: 85,
        marginRight: 9,
        marginTop:3,
    },
    signUp: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 21,
        color: '#000000'
    },
    login: {
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        color: '#0066F5'
    },
    emailOrPhone: {
        flexDirection: 'row',
        alignItems: 'baseline',
        width: deviceWidth - 30,
        marginLeft: 18,
        height: 40,
        marginTop: 40
    },
    emailaddress: {
        marginLeft: 6,
        width: 225,
        color: '#F2F2F2'

    },

    viewDemacate: {
        height: 2,
        backgroundColor: '#EEEEEE4D',
        width: deviceWidth - 30,
        marginHorizontal: 15,
    },
    buttonLoginView: {
        marginTop: 10,
        alignItems: 'center',
    },
    newSignUp: {
        flexDirection: 'row',
        width: deviceWidth - 30,
        marginTop: 20,
        marginLeft: 18,
        marginBottom: 40,
        alignItems: 'center'
    },
    newUser: {
        color: '#ADBACD',
        marginLeft: 100,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        fontStyle: 'normal',

    },
    freeSignUp: {
        color: '#FFFFFF',
        marginLeft: 20,
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 21,
        fontStyle: 'normal'
    },
    forgotPassword: {
        color: '#ADBACD',
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 21,
        fontSize: 14,
        fontStyle: 'normal',
        textAlign: 'center'
    }

});
export const EmailTemplateStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        alignContent:'center',
        marginTop: 50,

    },
    topView: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10
    },
    obioma: {
        width: 89,
        height: 23,
        marginLeft: 23,
        position: 'absolute',

    },
    viewInBrowser: {
        marginLeft: 255,
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 16.5,
        color:'#506992',
        textAlign:'right'
    },
    emailIcon: {
        marginTop: 20,
    },
    emailIconView: {
        marginTop: 20,
        height: 86,
        width: deviceWidth-65,
        alignItems: 'center',
        backgroundColor: '#0066F54D',
        marginHorizontal: 24,
        marginLeft: 30
    },
    resetView: {
        height: 256,
        width: deviceWidth-65,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 24,
        elevation: 20,
        alignContent:'center',
        marginLeft: 30

    },
    resetHeader: {
        marginHorizontal: 104,
        fontWeight: '700',
        fontSize: 14,
        fontStyle: 'normal',
        lineHeight: 21,
        marginTop: 28,
    },
    hi: {
        marginLeft: 36,
        marginRight: 3,
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 19.5,
    },
    almostThere: {
        marginLeft: 36,
        marginRight: 3,
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 19.5,
    },
    button: {
        marginHorizontal: 50,
        marginTop: 25,
        width: 230,
        height: 40,
    },
    bottomView: {
        marginHorizontal: 84,
        marginTop: 28,
    },
    stayInTouch: {
        marginLeft: 80,
        fontWeight: '700',
        fontStyle: 'italic',
        fontSize: 13,
        lineHeight: 15.26,
        color:'#828282'
    },
    socialIcons: {
        flexDirection: 'row',
        marginTop: 15,
        alignContent:"center",
        marginLeft: 30

    },
    facebook: {
        marginLeft: 108,

    },
    twitter: {
        marginLeft: 8

    },
    instagram: {
        marginLeft: 8

    },
    email: {
        marginLeft: 8,
        marginRight: 86

    },
    bottomText:{
        marginTop: 17,
        alignSelf: 'center',
    },
    emailSent:{
        marginHorizontal: 45,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 18,
        color:'#506992'
    },
    copyright:{
        marginHorizontal: 30,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 11,
        lineHeight: 16.5,
        color:'#506992'
    }
});
export const ResetWithEmailStyles = StyleSheet.create({

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
    },
    forgotpasswordView: {
        height: 133,
        width: 360,
    },
    emailOrPhone: {
        flexDirection: 'row',
        alignItems:'baseline'
    },
    emailaddress: {
        marginLeft: 30,
        width: 225

    },

    button: {
        marginHorizontal: 24,
        marginTop: 54
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
        color:'#0066F5'
    },
    canRemember: {

        marginLeft: 48,
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
    },
    viewDemacate: {
        height: 2,
        backgroundColor: '#C4C4C480',
        width: deviceWidth - 60,
        marginHorizontal: 25,
    },


});
export const NewPasswordStyles = StyleSheet.create({

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
    },
    forgotpasswordView: {
        height: 133,
        width: 360,
    },
    new_comfirmPassword: {
        alignItems: 'baseline'
    },
    newPassword: {
        marginLeft: 30,
        width: 225,

    },
    confirmNewPw: {
        marginLeft: 30,
        width: 225,

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
    },
    canRemember: {

        marginLeft: 48,
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
    },
    newpwAndIcon: {
        flexDirection: 'row',

    },
    confirmPwAndIcon: {
        flexDirection: 'row'
    }

});
