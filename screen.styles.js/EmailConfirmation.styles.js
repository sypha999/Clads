import { StyleSheet } from 'react-native';
import { colors } from '../components/util';

const { DEEP_SKY_BLUE, WHITE, GRAY_TEXT, MENU_TEXT_COLOR, EMAIL_VIEW_COLOR } = colors;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },pageContent: {
        marginTop: 100,
        top: 100,
    },
    headerView: {
        flexDirection: 'row',
        marginTop: 120,
        width: 313,
        alignSelf: 'center',
        alignItems: 'flex-end',
    },
    obiomaIcon: {
        position: 'absolute',
    },
    viewInBrowser: {
        marginLeft: 235,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16.5,
        color: MENU_TEXT_COLOR,
        // fontFamily: 'Poppins'
    },
    emailIconView: {
        marginTop: 25,
        height: 86,
        width: 313,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: EMAIL_VIEW_COLOR,
        marginHorizontal: 24,
        borderRadius: 5,
    },
    emailIcon: {
        marginTop: 20

    },
    confirmationView: {
        height: 256,
        width: 313,
        backgroundColor: WHITE,
        alignItems: 'center',
        alignSelf: 'center',
        elevation: 20,
        paddingHorizontal: 10,
    },
    confirmationHeader: {
        fontWeight: '700',
        fontSize: 14,
        fontStyle: 'normal',
        lineHeight: 21,
        marginTop: 28,
        textAlign: 'center',
    },
    confirmationMessage: {
        marginTop: 36,
        marginRight: 3,
        fontWeight: '400',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 19.5,
        // fontFamily: 'Poppins'
    },
    button: {
        backgroundColor: DEEP_SKY_BLUE,
        width: 230,
        height: 40,
        marginTop: 25,
        borderRadius: 5,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        // fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 24,
        color: 'white',
    },
    bottomView: {
        marginHorizontal: 84,
        marginTop: 28,
    },
    stayInTouch: {
        textAlign: 'center',
        //fontFamily:'Raleway',
        fontWeight: '700',
        fontStyle: 'italic',
        fontSize: 13,
        lineHeight: 15,
        color: GRAY_TEXT
    },
    socialIcons: {
        flexDirection: 'row',
        marginTop: 15,
        alignSelf: 'center',
    },
    twitter: {
        marginLeft: 8
    },
    instagram: {
        marginLeft: 8
    },
    email: {
        marginLeft: 8,
    },
    bottomText:{
        marginTop: 17,
        alignSelf: 'center',
    },
    emailSent:{
        // fontFamily: 'Poppins',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 18,
        color: MENU_TEXT_COLOR,
        textAlign: 'center',
    },
    copyright:{
        marginTop: 10,
        // fontFamily: 'Poppins',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 11,
        lineHeight: 16.5,
        color: MENU_TEXT_COLOR,
        textAlign: 'center',
    }



})
