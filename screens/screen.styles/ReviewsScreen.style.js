import { StyleSheet } from "react-native";
import { colors } from "../../components/util";

const { BLACK, BORDER_COLOR, MENU_TEXT_COLOR, DEEP_SKY_BLUE, WHITE } = colors;

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    profileView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: BORDER_COLOR,
        padding: 20,
    },
    profileImage: {
        borderRadius: 50,
    },
    profileName: {
        marginLeft: 20,
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    ratingNumber: {
        fontSize: 24,
        fontFamily: 'Poppins_400Regular',
        fontStyle: 'normal',
        fontWeight: 'bold',
    },
    ratingStarView: {
        flexDirection: 'row',
    },
    reviewsNumber: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        fontStyle: 'normal',
        fontWeight: '500',
        color: BLACK,
        fontStyle: 'normal',
        fontWeight: '500',

    },
    ratingView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    artisansRatingView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: BORDER_COLOR,
    },
    ratingProgressBar: {
        height: 5,
        width: 79,
        marginLeft: 5,
    }, 
    sinlgeProgressBarView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    progressText: {
        fontFamily: 'Poppins_400Regular',
        fontStyle: 'normal',
        fontWeight: '400',
        letterSpacing: 0.1,
    },
    rateArtisansView: {
        alignItems: 'center',
    },
    artisansName: {
        color: MENU_TEXT_COLOR,
        fontSize: 20,
        fontFamily: 'Poppins_400Regular',
        fontStyle: 'normal',
        fontWeight: '400',
        marginTop: 10,
    },
    input: {
        width: '85%',
        alignSelf: 'center',
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 16,
        marginTop: 20,
    },
    textInputBorder: {
        height: 2,
        width: '85%',
        marginTop: 20,
        backgroundColor: DEEP_SKY_BLUE,
        alignSelf: 'center',
    },

    //button
    touchButton: {
        backgroundColor: DEEP_SKY_BLUE,
        height: 42,
        marginVertical: 10,
        width: '85%',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: WHITE,
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        fontWeight: 'bold',
        fontStyle: 'normal',
        textAlign: 'center',
    },

    //flatlist
    comments: {
        marginHorizontal: 10,
    },
    commentsBody: {
        flex: 1,
        alignSelf: 'center',
        padding: 10
    },
    reviewHeader: {
        flexDirection: 'row',
        height: 50,
    },
    userDetails: {
        marginLeft: 10,
    },
    commentsName: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontFamily: 'Poppins_400Regular',
        height: 18,
        color: MENU_TEXT_COLOR,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16
    },
    starsAndDate: {
        flexDirection: 'row',
        marginTop: 2,
    },
    date: {
        marginLeft: 30,
        color: MENU_TEXT_COLOR,
        fontFamily: 'Poppins_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    dragIndicator: {
        marginLeft: 130,
    },
    bodyText: {
        color: MENU_TEXT_COLOR,
        fontFamily: 'Poppins_400Regular',
        fontStyle: 'normal',
        fontWeight: '400',
    },


})


