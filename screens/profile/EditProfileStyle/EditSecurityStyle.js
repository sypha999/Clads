import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    optioncontainer:{
        flexDirection:"row"
    },
    verifiedText:{
        marginTop: 29,
    },
    phoneNumber:{
        marginTop: 20
    },
    numberInput:{
        marginTop: 20,
    },
    passwordText:{
        marginTop: 10,
        
    },
    textInput: {
        marginVertical: 5,
        fontFamily: 'Poppins_400Regular',
        marginHorizontal: 10,
        width: "95%",
 
     },
     changePasswordText:{
         marginTop: 10,
     },
     touchableOpacity:{
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0065F5',
        marginHorizontal: 10,
        height:39,
        marginTop: 10
        
    },
    optionAccount:{
        marginLeft: 27,
        marginTop: 5,
        borderRadius: null,
        fontSize: 12,
        lineHeight: 18,
        letterSpacing: 0.1,
        fontFamily: 'Poppins_400Regular'
       },
       optionSecurity:{
        marginLeft: 27,
        marginTop: 5,
        borderRadius: null,
        fontSize: 12,
        lineHeight: 18,
        letterSpacing: 0.1,
        fontFamily: 'Poppins_400Regular',
        color: '#0066F5',
       },
       textInputContainer:{
        flexDirection: "row",
        marginVertical: 20,
        
       },
       textInputEye:{
           position: "absolute",
           right: 20
       }
})
