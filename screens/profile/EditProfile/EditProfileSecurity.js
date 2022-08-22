import React, {useState, useEffect} from "react";
import { View,Text, ScrollView } from "react-native";
import { styles } from "../EditProfileStyle/EditSecurityStyle";
import ButtonBlue from "../../../components/ButtonBlue";
import { Icon, Input } from "react-native-elements";
import { useSelector } from "react-redux";
import { constants } from "../../../components/util";




const EditProfileSecurity = () => {
    const tokenData = useSelector((state) => state.token)
    const [validates, setValidates] = useState(false)
    const [secureEntry, setSecureEntry] = useState(true)
    const visibilityMode = (secureEntry) ? "visibility-off" : "visibility"

    const [passwordError, setPasswordError] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const [oldPasswordInput, setOldPasswordInput] = useState("");
    const [oldPasswordError, setOldPasswordError] = useState("");
    
    // state saves phone number 
    const [phoneInput, setPhoneInput] = useState("");
    const [phoneError, setPhoneError] = useState("")

     const [email, setEmail] = useState("");
     const [gender, setGender] = useState("");
    
     // user name state
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    useEffect(() => {
        getUserProfile()
    }, [])
    
    const toggleVisibility = () => {
        if(secureEntry === false) {
            setSecureEntry(true)
        }else{
            setSecureEntry(false)
        }
    }

    function passwordValidation(value) {
          if(value > 6) {
            setPasswordError(constants.PASSWORD_ERROR)
            setValidates(false)
        }else{
            setPasswordError("")
            setValidates(true)
        }
    }

    
    function phoneValidation(value) {
        const phoneRegex = constants.PHONE_REGEX
        const test = value.match(phoneRegex)
        if(!test){
            setPhoneError("invalid phone number")
            setValidates(false)
        }else{
            setPhoneError("")
            setValidates(true)
        }
    }

     // fetches user information 
     const getUserProfile = () => {
        fetch(constants.GET_USER_PROFILE_API_URL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${tokenData}`
            }
        })
        .then(response => response.json())
        .then(result => {
            setFirstName(result.payload.firstName)
            setLastName(result.payload.lastName)
            setGender(result.payload.gender)
            setEmail(result.payload.email)
            
        })
        .catch((error)=>console.log(error))
    }
    //updates user information
    const updateUserProfile = () => {
            fetch(constants.UPDATE_PROFILE_API_URL, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': `Bearer ${tokenData}`,
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    phoneNumber: phoneInput,
                    email: email,
                    gender: gender,
                  })
    
            })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch((error)=> console.log(error))
    }
    
    const handlePress = ()=>{ 
        if(validates){  
            updateUserProfile()
        }
}

    return(
        <ScrollView>
            <View>
                <Text style={styles.verifiedText}>
                    Verified Information
                </Text>
                <Text style={styles.phoneNumber}>
                    Phone Number
                </Text>
                <Input
                keyboardType="numeric"
                maxLength={11}
                phoneRegex={constants.PHONE_REGEX}
                placeholder="07000000000"
                style={{...styles.textInput, ...styles.numberInput}}
                value={phoneInput}
                errorMessage={phoneError}
                onChangeText={(value)=> {
                    setPhoneInput(value)
                    phoneValidation(phoneInput)
                    }
                }
                />
                <Text style={styles.passwordText}>
                    Password
                </Text>
                <Text style={styles.changePasswordText}>
                    Change Password
                </Text>
                <View style={styles.textInputContainer}>
                    <Input
                    secureTextEntry={secureEntry}
                    style={styles.textInput}
                    placeholder="Old Password"
                    value={oldPasswordInput}
                    errorMessage={oldPasswordError}
                    onChangeText = {(value)=> {
                        setOldPasswordInput(value)
                        phoneValidation(oldPasswordInput)
                        }
                    }
                    />
                    <View style={styles.textInputEye}>
                        <Icon
                            name={visibilityMode}
                            type="material"
                            onPress={toggleVisibility}
                        />
                    </View>
                </View>
                <View style={styles.textInputContainer}>
                    <Input
                    secureTextEntry={secureEntry}
                    style={styles.textInput}
                    placeholder="New Password"
                    value={passwordInput}
                    errorMessage={passwordError}
                    onChangeText={(value)=> {
                        setPasswordInput(value)
                        passwordValidation(passwordInput)
                        }
                    }
                    />
                    <View style={styles.textInputEye}>
                        <Icon
                            name={visibilityMode}
                            type="material"
                            onPress={toggleVisibility}
                        />
                    </View>
                    
                </View>
                
                <ButtonBlue event={()=>handlePress()} 
                style={styles.touchableOpacity} caption='SAVE CHANGES'/>
            </View>
        </ScrollView>  
    )
}

export default EditProfileSecurity