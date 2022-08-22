import React, { useState } from "react";
import {View, Text,FlatList, Image} from "react-native";
import { styles } from "./FavStyles";
import { Icon } from "react-native-elements";




export default function Favourites(){

    const [DATA, setDATA] = useState([
        require('../../assets/photoOne.png'),
        require('../../assets/photoTwo.png'),
        require('../../assets/photoThree.png'),
        require('../../assets/photoFour.png'),
    ])
    const [name, setName] =  useState([
        "JJ Fashionista Limited",
        "Lola Jegede Threads",
        "Amina Yusuf Fashion",
        "fatai rolling Threads"
    ])
    
    const handleEmpty = () => (
           
           <View style={{...styles.container, justifyContent: 'center', alignItems: 'center', marginTop: 247}}>
                <Icon
                color='#7F92B4' 
                raised
                name='heart'
                type='font-awesome'
                size={50}
                />
                <View style={styles.text}>
                        <Text  style={styles.favouriteTitle}>You do no have</Text>
                        <Text  style={styles.favouriteTitle}> any favourites</Text>
                </View>  
            </View>
        );
    const render = ({item, index}) => (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                style={styles.favouritePhoto}
                    source={item}
                />
                <Text style={styles.favouriteTitle}>
                    {name[index]}
                </Text>
            </View>
        </View>
    );

      return(
        <View>
            <FlatList
            keyExtractor={(item, index)=>index.toString()}
            data={DATA}
            ListEmptyComponent={handleEmpty}
            renderItem={render}
            />
        </View>
      )
    

    
   
   
}
