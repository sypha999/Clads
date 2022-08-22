import React, { useState, useEffect } from "react";
import { Text, View, Image, ScrollView,  } from "react-native";
import { CheckBox, Input } from "react-native-elements";
import { useSelector } from "react-redux";
import { styles } from "../EditProfileStyle/EditAccountstyle";
import ButtonBlue from "../../../components/ButtonBlue";
import PickerComponent from "../../../components/PickerComponent";
import ComponentDivider from "../../../components/ComponentDivider";
import { constants } from "../../../components/util";

const EditProfileAccount = () => {


    useEffect(() => {
        getUserProfile()
    }, [])

    const [validates, setValidates] = useState(false)
    //redux state
    const tokenData = useSelector((state) => state.token)
    //picker selects delivery address state
    const [pickerData, setPickerData] = useState({})
    
    // error handling state
    const [streetError, setStreetError] = useState("")
    const [cityError, setCityError] = useState("")
    const [pickerError, setPickerError] = useState("")
    
    // user address state
    const [streetInput, setStreetInput] = useState("");
    const [cityInput, setCityInput] = useState("");
    
    // user gender state
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const [gender, setGender] = useState(false);
    

    // user name state
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()

    
    const setGenderFunction = (gender) => {
        if(gender == 'male') {
            setMale(true)
        }
        else {
            setFemale(true)
        }
    }

    const genderMale = ()=> {
        setMale(true)
        setFemale(false)
    }
    
    const genderFemale = () => {
        setMale(false)
        setFemale(true)
    }

    const streetValidation = (value) => {
        const trimValue = value.trim()
        if(trimValue.length < 8){
            setStreetError("address is too short")
            setValidates(false)
        }else{
            setStreetError("")
            setValidates(true)
        }
    }

    const pickerValidation = (value) => {
        if(value === ''){
            setPickerError("select a valid state")
            setValidates(false)
        }else{
            setPickerError("")
            setValidates(true)
        }
    }

    const cityValidation = (value) => {
        const trimValue = value.trim()
        if(trimValue.length < 3){
            setCityError("city name is invalid")
            setValidates(false)
        }else{
            setCityError("")
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
            setGenderFunction(result.payload.gender)
            setGender(result.payload.gender)
        })
    }
    // updates user information 
    const updateUserProfile = () => {
            fetch(constants.UPDATE_PROFILE_API_URL, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${tokenData}`
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    phoneNumber: "09034572528",
                    email: "lepeacedude@outlook.com",
                    gender: gender,
                    deliveryAddresses: [
                      {
                        "street": streetInput,
                        "city":cityInput,
                        "state": pickerData
                      }
                    ],
                    measurements: []
                  })
    
            })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch((error)=>console.log(error))
    }
       
    const handlePress = ()=>{
            if (validates){
                updateUserProfile()

            }
        }
    
    return (
        <ScrollView>
                <View style={styles.container}>
                    <View style={styles.pictureContainer}>
                        <Image style={styles.image} source={require('../../../assets/images/ProfileAvartar.png')} />
                        <Text style={styles.photoHintText}>Tap to change picture</Text>
                    </View>

                    <ComponentDivider />
                    
                    <View style={styles.userInfoContainer}>

                        <Input
                            placeholderTextColor='#0A2E65'
                            placeholder="First Name" 
                            rightIcon={<Text style={styles.paragraph}>{firstName}</Text>}
                            editable={false}
                        />
                        
                        <Input
                            placeholderTextColor='#0A2E65'
                            placeholder="Last Name"
                            rightIcon={<Text style={styles.paragraph}>{lastName}</Text>}
                            editable={false}
                        />
                        
                        <Input 
                            placeholderTextColor='#0A2E65'
                            placeholder="Other Name" 
                            rightIcon={<Text style={styles.paragraph}></Text>}
                            editable={false}
                            />
                        
                    
                        <View style={styles.genderContainer}>
                            <Text style={styles.subject}>Gender</Text>
                            <View style={styles.radioContainer}>
                                <CheckBox  
                                    title="Female"
                                    placeholderTextColor="#0066F5"
                                    center
                                    checked={female}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    onPress={genderFemale}
                                    style={styles.checkbox}
                                    uncheckedColor="#0A2E65"
                                    checkedColor="#0066F5"  
                                />

                                <CheckBox
                                    placeholderTextColor="#0A2E5"  
                                    title="Male"
                                    center
                                    checked={male}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    onPress={genderMale}
                                    style={styles.checkbox} 
                                    uncheckedColor="#0A2E65"
                                    checkedColor="#0066F5"  
                                />
                                
                            </View>
                        </View>

                        <View style={styles.dividerStyle}>
                            <ComponentDivider />
                        </View>
                    
                        <Text style={styles.subject}>Delivery Address</Text>
                        <Input 
                            style={styles.textInput} 
                            placeholder="Street" 
                            value={streetInput}
                            errorMessage={streetError}
                            onChangeText={(value) => {
                                setStreetInput(value)
                                streetValidation(streetInput)
                                }
                            }
                        />
                        
                        <Input 
                            style={styles.textInput} 
                            placeholder="City" 
                            value={cityInput}
                            errorMessage={cityError}
                            onChangeText={(value)=> {
                                setCityInput(value)
                                cityValidation(cityInput)
                               }
                            }
                        />
                        
                        <PickerComponent
                        onChange = {(itemValue, index)=>{ 
                               setPickerData(itemValue)
                               pickerValidation(pickerData)
                            }
                        }
                        pickerData={pickerData}
                        />
                        <View style={styles.pickerErrorContainer}>
                        <Text style={styles.pickerError}>{pickerError}</Text>
                        </View>
                                
                    </View>
                    
                    <ButtonBlue event={()=>handlePress()}
                            style={styles.touchableOpacity} 
                            caption="SAVE CHANGES"/>
                    
                </View>
        </ScrollView>
    )
}

export default EditProfileAccount