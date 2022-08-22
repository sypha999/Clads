import React, { useState, useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./navigation/AppNavigation";
import AppLoading from "expo-app-loading";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import AuthNavigator from "./navigation/AuthNavigator";
import { RootSiblingParent } from "react-native-root-siblings";
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import { getToken } from './localStorage/storage';
import { reducer } from './data/redux/reducers'

const App = () => {

  const store = createStore(reducer)

  const [authToken, setAuthToken] = useState(null)
  let token = null

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  // useEffect(async () => {
  //   try {
  //     token = await getToken()
  //     setAuthToken(token)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [])

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
     <Provider store={store}>
      <RootSiblingParent>
        <NavigationContainer>
          {/* <AppNavigation />  */}
         <AuthNavigator />
         
        </NavigationContainer>
      </RootSiblingParent>
    </Provider>
  );
};

export default App;
