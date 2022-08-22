import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import * as Sharing from 'expo-sharing'
import { useSelector } from 'react-redux';


let imageFileName = null  //initial value for imageUri
let headerTitle = null
let imageURI = null

export function ImageFullScreen({navigation, route}) {

    const { title, imageUri } = route.params

    const [selectedImageUri, setSelectedImageUri] = useState(imageUri)   // get uri of the image selected
    // const [selectedImageDescripton, setSelectedImageDescripton] = useState(title)
    imageFileName = selectedImageUri
    headerTitle = title
    imageURI = selectedImageUri

    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height - 250
    
    // hide bottom navigation menu when this screen is displayed
    useEffect(() => {
        navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" } })
        return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
      }, [ navigation ])


    return (
        <View style={ styles.container }>
            <Image source={{ uri: selectedImageUri }} style={{ width: width, height: height }}/>
        </View> 
    )
}

// open the share dialog to share image
export const launchShareDialog = async () => {
    try {
        await Sharing.shareAsync(imageFileName)
    }
    catch(err) {
        console.log(err)
    }
};

 

export const setHeaderTitle = () => headerTitle

export const imagefileId =null

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
})
