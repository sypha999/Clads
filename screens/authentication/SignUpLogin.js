import React, { Component } from "react";
import { View, Image } from "react-native";
import { Text } from "react-native";
import ButtonBlue from "../../components/ButtonBlue";
import ButtonWhite from "../../components/ButtonWhite";
import SignUpLoginStyle from "../screen.styles/SignUpLogin.style";
import loginLogo from "../..//assets/images/loginLogo.png";
import LoginWithEmail from "./LoginWithEmail";

const SignUpLogin = ({ navigation, route, props }) => {
  //Navigation function will be passed to the prop from button component
  const openSignUpPage = () => {
    return navigation.navigate("Signup");
   
  };

  const login = () => {
    return navigation.navigate("LoginWithEmail");
  };

  return (
    <View style={SignUpLoginStyle.container}>
      <View style={SignUpLoginStyle.Wrapper}>
        <Image
          style={SignUpLoginStyle.image}
          source={loginLogo}
          resizeMode="contain"
        />
        <Text style={SignUpLoginStyle.loremIpsum}>Lorem Ipsum</Text>

        <View style={SignUpLoginStyle.ButtomsView}>
          <ButtonWhite
            caption="SIGNUP"
            style={SignUpLoginStyle.ButtonWithBlueText}
            event={openSignUpPage}
          ></ButtonWhite>

          <ButtonBlue
            caption="LOGIN"
            style={SignUpLoginStyle.ButtonWhite}
            event={login}
          ></ButtonBlue>
        </View>
      </View>
    </View>
  );
};

export default SignUpLogin;
