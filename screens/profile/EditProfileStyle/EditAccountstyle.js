import { StyleSheet } from "react-native"
// import { color } from "react-native-elements/dist/helpers"


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoContainer: {
        paddingHorizontal: 20
    },
    radioContainer:{
        flexDirection: "row",
        justifyContent: 'center'
    },
    genderContainer:{
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pictureContainer:{
        paddingVertical: 25,
        alignItems: 'center',
    },
    photoHintText: {
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
        marginTop: 7
    },
    paragraph: {
        fontSize: 18,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
    },
    image: {
        width: 100,
        height: 100
    },
    // checkbox: {
    //     backfaceVisibility: 'hidden'
    // },
    dividerStyle: {
        marginHorizontal: 10
    },
    subject: {
        marginVertical: 5,
        paddingLeft: 10,
        color: '#0A2E65',
        fontFamily: 'Poppins_400Regular',
        fontSize: 18
    },
    textInput: {
       marginVertical: 9,
       fontFamily: 'Poppins_400Regular',
    },
    touchableOpacity:{
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#0065F5',
        marginHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 20,
    },
    pickerErrorContainer:{
        justifyContent: "center",
        alignItems:"center",
        marginBottom: 5,
        },
        pickerError:{
            color: "red"
        }
})