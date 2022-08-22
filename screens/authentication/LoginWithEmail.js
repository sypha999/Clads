import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import GoogleIcon from "../../assets/google_symbol.png";
import { Icon } from "react-native-elements";
import ValidateEmail from "../resetPassword/resetWithEmail/fieldValidation/EmailValidation";
import ValidatePassword from "../resetPassword/resetWithEmail/fieldValidation/passwordValidation";
import { LoginWithEmailStyles } from "../screen.styles/ResetPasswordAndLoginStyles";
import Toast from "react-native-root-toast";
import { useSelector, useDispatch } from "react-redux";
import { savePayLoad } from "../../data/redux/actions";
import { storeToken, getToken, removeToken } from "../../localStorage/storage";


const LoginWithEmail = ({ navigation }) => {
   //sets up redux global state manager
  const tokenData = useSelector((state) => state.token);
  const dispatch = useDispatch();

   // checks validation and logs user into thier profile
  const LogUserIn = () => {
    if (ValidateEmail(userEmail) && ValidatePassword(userPassword)) {
       login()
     }else{
       Toast.show("Incorrect email and/or password. Please check and try again.", {
         duration: Toast.durations.LONG,
       });
     }
   
  };
  
 


// stores data in the async storage for peresistence
  const storeData = async (value) => {
    try {
      await storeToken("token", value);
    } catch (error) {
      console.log(error);
    }
  };

  //navigates to the reset password screen
  const ResetPassword = () => {
    navigation.navigate("ResetWithEmail");
  };

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const pwVisbililtyIconName = isSecureEntry ? "visibility-off" : "visibility";

   //toggles password field visibility
  const passwordVisibility = () => {
    if (isSecureEntry == false) {
      setIsSecureEntry(true);
    } else {
      setIsSecureEntry(false);
    }
  };

  //makes network call with login information and returns response from server
  const login = () => {
    //post input to api
    fetch("https://clads-service.herokuapp.com/api/v1/customer/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        })
    })
      .then((response) => response.json() )//convert response to json 
      .then((json) => {
        console.log(json);// for debugging
      
        if(json.status == 200){
          //dispatches action to save token in redux state
          dispatch(savePayLoad(json.payload));
          //calls the async storage function and stringifys the input json
          storeData(json.payload)
           // display login succcessful toast
           Toast.show("Login Successful", {
            duration: Toast.durations.LONG,
          });

          navigation.navigate('AppNavigation')
        }else{
          Toast.show("Invalid username or password", {
            duration: Toast.durations.LONG,
          });
        }
      
      })
      .catch((error) => console.log(error));
  };

  const signUp =()=>{
    navigation.navigate('Signup')
  }

  return (
    <View style={LoginWithEmailStyles.container}>
      <View style={LoginWithEmailStyles.topView}>
        <Text style={LoginWithEmailStyles.welcome}>WELCOME BACK</Text>
        <Text style={LoginWithEmailStyles.continue}>Login to continue</Text>
      </View>

      <TouchableOpacity
        style={
          LoginWithEmailStyles.touchableOpacity
        } /**onPress={GoogleSignIn}*/
      >
        <View style={LoginWithEmailStyles.buttonView}>
          <Image style={LoginWithEmailStyles.googleLogog} source={GoogleIcon} />

          <Text style={LoginWithEmailStyles.signUp}>Sign in with Google</Text>
        </View>
      </TouchableOpacity>

      <View style={LoginWithEmailStyles.emailOrPhone}>
        <TextInput
          style={LoginWithEmailStyles.emailaddress}
          placeholder="Email Address"
          placeholderTextColor="#F2F2F2"
          value={userEmail}
          onChangeText={(text) => setUserEmail(text)}
        />
      </View>

      <View style={LoginWithEmailStyles.viewDemacate}></View>

      <View style={LoginWithEmailStyles.emailOrPhone}>
        <TextInput
          style={LoginWithEmailStyles.emailaddress}
          placeholder="Password"
          placeholderTextColor="#F2F2F2"
          value={userPassword}
          onChangeText={(text) => setUserPassword(text)}
          secureTextEntry={isSecureEntry}
        />

        <View style={{ marginLeft: 70 }}>
          <Icon
            name={pwVisbililtyIconName}
            type="material"
            color="#DADADA"
            onPress={passwordVisibility}
          />
        </View>
      </View>

      <View style={LoginWithEmailStyles.viewDemacate}></View>

      <TouchableOpacity
        style={LoginWithEmailStyles.touchableOpacityForLogin}
        onPress={LogUserIn}
      >
        <View style={LoginWithEmailStyles.buttonLoginView}>
          <Text style={LoginWithEmailStyles.login}>Log in</Text>
        </View>
      </TouchableOpacity>

      <View style={LoginWithEmailStyles.newSignUp}>
        <Text style={LoginWithEmailStyles.newUser}>New user?</Text>
        <Text style={LoginWithEmailStyles.freeSignUp} onPress={signUp}>Signup for free</Text>
      </View>

      <View>
        <Text
          style={LoginWithEmailStyles.forgotPassword}
          onPress={ResetPassword}
        >
          Forgot password?
        </Text>
      </View>
    </View>
  );
};

export default LoginWithEmail;
