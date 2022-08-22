import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomNavigation from './BottomNavigation'
import DrawerContent from '../components/DrawerContent'
import Favourites from '../screens/favourites/Favourites'
 
const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {

    return (
        
        // <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        //     <Drawer.Screen 
        //         name="Dashboard" 
        //         options={{ headerShown: false, animationEnabled: false }}
        //     >
        //     {() => ( 
                <BottomNavigation />
                // <Favourites />
        //     )}
        //     </Drawer.Screen>
        //     {/* <Drawer.Screen 
        //         name="Favourites" 
        //         options={{ headerShown: false, animationEnabled: false }}
        //     >
        //     {() => ( 
        //         <Favourites />
        //     )}
        //     </Drawer.Screen> */}
        // </Drawer.Navigator>
    )
    
}   

export default DrawerNavigation