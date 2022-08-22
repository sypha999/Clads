import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import BottomNavigation from './BottomNavigation'
import CustomHeader from "../components/CustomHeader"
import DrawerContent from '../components/DrawerContent'
import Favourites from '../screens/favourites/Favourites'
import EditProfile from './EditProfileNavigation'
 
const Drawer = createDrawerNavigator()

const AppNavigation = () => {

    const [greeting, setGreeting] = useState("Hi Yusuf")

    return (
        
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen 
                name="Dashboard" 
                options={{ headerShown: false, animationEnabled: false }}
            >
            {() => ( 
                <BottomNavigation />
            )}
            </Drawer.Screen>
            <Drawer.Screen 
                name="Favourites" 
                options={{
                    header: ({ navigation, route, options }) => {
                        const title = 'Favourites'
                        return <CustomHeader title={title} style={options.headerStyle} navigation={navigation} iconFlag={false} backNav={true} />;
                    },
                }}
                component={Favourites}
            />
            <Drawer.Screen 
                name="Edit Profile" 
                options={{
                    header: ({ navigation, route, options }) => {
                        const title = 'Favourites'
                        return <CustomHeader title={title} style={options.headerStyle} navigation={navigation} iconFlag={false} backNav={true} />;
                    },
                }}
                component={EditProfile}
            />
        </Drawer.Navigator>
    )
    
}   

export default AppNavigation