import { useLinkProps } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ImagesViewPager = ({ navigation }) => {
  const openArtisanProfile = () => {
    navigation.navigate("ArtisanProfile");
    //   return console.log("good");
  };
  const [images, setimages] = useState([
    require("../assets/images/testImage1.png"),
    require("../assets/images/testImage2.png"),
    require("../assets/images/testImage3.png"),
    require("../assets/images/testImage1.png"),
    require("../assets/images/testImage2.png"),
  ]);

  const [vendorName, setVendorName] = useState([
    "JJ Fashionista Limited",
    "Lola Jegede Threads",
    "Amina Yusuf Fashion",
    "JJ Fashionista Limited",
    "Lola Jegede Threads",
  ]);

  const [vendorLocation, setVendorLocation] = useState([
    "Egbeda, Lagos",
    "Lekki, Lagos",
    "Zaria, Kaduna",
    "Egbeda, Lagos",
    "Lekki, Lagos",
  ]);

  const _render = ({ item, index }) => (
    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={openArtisanProfile} style={styles.touchStyles}>
        <Image source={item} />
        <Text style={styles.vendorName}>{vendorName[index]}</Text>
        <Text style={styles.vendorLocation}>{vendorLocation[index]}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={_render}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 110,
    marginRight: 12,
  },
  vendorName: {
    flexWrap: "wrap",
    fontFamily: "Poppins_400Regular",
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: 13,
  },
  vendorLocation: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },
  touchStyles: {
    padding: 0,
  },
});

export default ImagesViewPager;
