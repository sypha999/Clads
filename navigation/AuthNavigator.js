import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpLogin from "../screens/authentication/SignUpLogin";
import SignUpChoices from "../screens/authentication/SignUpChoices";
import EditProfile from "./EditProfileNavigation";
import LoginWithEmail from "../screens/authentication/LoginWithEmail";
import ResetWithEmail from "../screens/resetPassword/resetWithEmail/ResetWithEmail";
import EmailTemplate from "../screens/resetPassword/resetWithEmail/EmailTemplate";
import NewPasswordForResetWithEmail from "../screens/resetPassword/resetWithEmail/NewPasswordForResetWithEmail";
import SignupWithEmail from "../screens/authentication/SignupScreen";
import EmailConfirmation from "../screens/authentication/EmailConfirmationScreen";
import ReviewsScreen from "../screens/reviews_and_ratings/ReviewsScreen";
import AppNavigation from "./AppNavigation";
import ArtisanProfile from "../screens/profile/artisanProfile/ArtisanProfile";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={SignUpLogin}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="Reviews"
        component={ReviewsScreen}
        options={"Reviews"}
      />

      <Stack.Screen
        name="Signup"
        component={SignUpChoices}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignUpWithEmail"
        component={SignupWithEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailConfirmation"
        component={EmailConfirmation}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="LoginWithEmail"
        component={LoginWithEmail}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ResetWithEmail"
        component={ResetWithEmail}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EmailTemplate"
        component={EmailTemplate}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NewPasswordForResetWithEmail"
        component={NewPasswordForResetWithEmail}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ArtisanProfile"
        component={ArtisanProfile}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="AppNavigation"
        component={AppNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
