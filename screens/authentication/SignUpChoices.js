import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import SignUpChoicesStyle from "../screen.styles/SignUpChoices.style";
import ButtonBlue from "../../components/ButtonBlue";
import ButtonWhite from "../../components/ButtonWhite";
import loginLogo from "../../assets/images/loginLogo.png";
import googleIcon from "../../assets/images/googleIcon.png";
import * as Google from "expo-google-app-auth";
import Toast from "react-native-root-toast";
import { constants } from "../../components/util";
import { useSelector, useDispatch } from "react-redux";
import { savePayLoad } from "../../data/redux/actions";

const {
  SUCCESS,
  IOS_CLIENT_ID,
  ANDROID_CLIENT_ID,
  SCOPE_PROFILE,
  SCOPE_EMAIL,
  BACKEND_AUTH_APIURL,
} = constants;

const SignUpChoices = ({ navigation, route }) => {

  const [userAccessToken, setUserAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();
  const [userIdToken, setUserIdToken] = useState();

  const tokenData = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const goToDashboard = () => {
    navigation.navigate("AppNavigation");
  };

  const goToLogin =()=>{
    navigation.navigate("LoginWithEmail")
  }

  const openSignUpWithEmailPage = () => {
    return navigation.navigate("SignUpWithEmail");
  };

  function authenticateWithBackEnd() {
    fetch(BACKEND_AUTH_APIURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userIdToken}`,
        Role:'CLIENT',
      },
    })
      .then(response => response.json())
      .then((json) => {
        if (json.status === 200) {
          //console.log(json)
          dispatch(savePayLoad(json.payload))
          Toast.show(`${json.message}`, {
            duration: Toast.durations.SHORT,
          });
          goToDashboard();
          console.log(tokenData)
        }else{
          Toast.show(`${json.message}`, {
          duration: Toast.durations.LONG,
        });
        
        }

      })
      .catch((error) => { alert(`${error}`) })
  };

  async function SignUpWithGoogle() {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: [SCOPE_PROFILE, SCOPE_EMAIL],
      });

      if (result.type === SUCCESS) {
        //success means access token is now valid
        const { user, accessToken } = result;
        setUserInfo(user);
        setUserIdToken(result.idToken);
        console.log(result.idToken)
        setUserAccessToken(accessToken);
        //communicate user id token to the backend
        authenticateWithBackEnd();
      } else {
        Toast.show("Signup cancelled by user. Try again", {
          duration: Toast.durations.SHORT,
        });
      }
    } catch (error) {
      Toast.show(
        `Sign up failed. Could be due to internet failure or internal error such as ${error}`,
        {
          duration: Toast.durations.LONG,
        }
      );
    }
  }

  return (
    <View style={SignUpChoicesStyle.container}>
      <Image
        style={SignUpChoicesStyle.logoImage}
        source={loginLogo}
        resizeMode="contain"
      ></Image>

      <View style={SignUpChoicesStyle.whiteBottonTextStyle}>
        <ButtonWhite
          caption="Signup with Google"
          style={SignUpChoicesStyle.blueBottonViewStyle}
          event={SignUpWithGoogle}
        ></ButtonWhite>
        <Image
          style={SignUpChoicesStyle.buttonGoogleIcon}
          source={googleIcon}
          resizeMode="contain"
        ></Image>
      </View>

      <ButtonBlue
        caption="Sign up with email"
        style={SignUpChoicesStyle.whiteButtonStyle_one}
        event={openSignUpWithEmailPage}
      ></ButtonBlue>

      <View style={SignUpChoicesStyle.loremIpsumRow}>
        <Text style={SignUpChoicesStyle.loremIpsum}>
          Already have an account?
        </Text>
        <Text style={SignUpChoicesStyle.login} onPress={goToLogin}>Login</Text>
      </View>
    </View>
  );

};

export default SignUpChoices;
