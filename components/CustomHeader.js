/**
 * Custom Header component after user logs in successfully
*/

import React, { useState } from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { Menu, MenuItem } from 'react-native-material-menu'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { launchShareDialog } from '../screens/dashboard/ImageFullScreen'
import { useSelector } from 'react-redux';
import { imagefileId } from '../screens/dashboard/ImageFullScreen'

const CustomHeader = ({ title, navigation, iconFlag, backNav, menu }) => {
    const smallProfileImage = require("../assets/images/profile_image_small.png")

    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false)

    const tokenData = useSelector((state) => state.token);

    function deleteImage (){
        const deleteApi = `https://clads-service.herokuapp.com/api/v1/upload/${imagefileId}`
        try {
            fetch(deleteApi, {
                method: "DELETE",
                headers: {
                  'Authorization': `Bearer ${tokenData}`,
                },
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                })
                .catch((err) => console.log(err));
            navigation.navigate('MediaScreen')
        } catch (error) {
            console.log(error)
        }
    
    }

    return (
        <View style={styles.grandContainer}>
            <View style={styles.container}>
            {
                backNav ? 
                <Ionicons name="arrow-back-outline" size={28} style={styles.leftMenuBack} onPress={() => navigation.goBack()} />
                :
                <Ionicons name="reorder-three" size={28} style={styles.leftMenu} onPress={() => navigation.openDrawer()} />
            }
            {
                iconFlag && <Image source={smallProfileImage} style={styles.toolbarProfileImage}/>
            }
            <Text style={styles.toolbarText}>{ title }</Text>
            </View>
            {
                menu && 
                    <View style={styles.rightMenuView}>
                        <Menu
                            visible={visible}
                            onRequestClose={closeMenu}
                            anchor={<Ionicons name="ellipsis-vertical" style={styles.rightMenu} size={24} onPress={openMenu}/>}>
                            <MenuItem 
                                onPress={()=> {
                                launchShareDialog()
                                closeMenu()}}>Share</MenuItem>
                            <MenuItem 
                                onPress={()=> {
                                closeMenu()}}>Edit</MenuItem>
                            <MenuItem 
                                onPress={()=> {
                                    deleteImage()
                                closeMenu()}}>Delete</MenuItem>
                        </Menu>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    grandContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#FFFFFF', 
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingTop: 10,
        paddingBottom: 10,
        elevation: 10,
    },
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#FFFFFF', 
        justifyContent: 'flex-start',
        paddingLeft: 5,
        paddingTop: 10,
        paddingBottom: 10,
    },
    leftMenu: {
        color: '#0066F5',
        marginRight: 15
    },
    leftMenuBack: {
        color: '#000000',
        marginRight: 15
    },
    rightMenu: {
        color: '#C4C4C4',
        marginRight: 15
    },
    rightMenuView: {
        alignItems: 'flex-end',
    },
    toolbarProfileImage: {
        marginRight: 10
    },
    toolbarText: {
        color: '#0A2E65',
        fontSize: 20,
        fontFamily: 'Poppins_400Regular',
        textTransform: 'capitalize',
        fontWeight: 'bold'
    }
})

export default CustomHeader