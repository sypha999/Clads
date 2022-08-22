import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import CustomHeader from '../components/CustomHeader'
import Dashboard from '../screens/dashboard/dashboard'
import MediaManagementStack from './MediaManagementStack'
import MessagesScreen from '../screens/dashboard/MessagesScreen'


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const [greeting, setGreeting] = useState("Hi Yusuf");

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          height: 80,
        },
        headerShown: true,
        showLabel: true,
        activeTintColor: "#0066F5",
        inactiveTintColor: "#C4C4C4",
        labelStyle: {
          fontSize: 14,
          textTransform: "uppercase",
          paddingTop: 10,
        },
        style: {
          backgroundColor: "#000000",
          borderTopWidth: 0,
          marginBottom: 0,
          shadowOpacity: 0.05,
          shadowRadius: 10,
          shadowColor: "#FFFFFF",
          shadowOffset: { height: 0, width: 0 },
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          header: ({ navigation, route, options }) => {
            const title = greeting;
            return (
              <CustomHeader
                title={title}
                style={options.headerStyle}
                navigation={navigation}
                iconFlag={true}
                backNav={false}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Media"
        component={MediaManagementStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-a-photo" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses" color={color} size={size} />
          ),
          header: ({ navigation, route, options }) => {
            const title = "Messages";
            return (
              <CustomHeader
                title={title}
                style={options.headerStyle}
                navigation={navigation}
                iconFlag={false}
                backNav={false}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
