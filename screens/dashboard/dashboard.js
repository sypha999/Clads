import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  TextInput,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import ImagesViewPager from "../../components/ImagesViewPager";
import SubHeadingText from "../../components/SubHeadingText";
import ComponentDivider from "../../components/ComponentDivider";
import FilterBottomSheet from "../../components/FilterBottomSheet";
import styles from "./DashboardStyles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Dashboard = ({ navigation }) => {
  const openArtisanProfile = () => navigation.navigate("ArtisanProfile");

  const [profileDetails, setProfileDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isVisible, setIsVisible] = useState(true);  
  const token = useSelector(state => state.token)
  
  const clientsURL = 'https://clads-service.herokuapp.com/api/v1/customer/me/profile'

  const artisansName = [
    "JJ Fashionista Limited",
    "Lola Jegede Threads",
    "Amina Yusuf Fashion",
    "Chima Corporates",
    "Jenipha Stitches",
    "Cece Stitches Inc",
    "Karo Gents",
  ]

  const artisansLocation = [
    "Egbeda, Lagos",
    "Lekki, Lagos",
    "Zaria, Kaduna",
    "Egbeda, Lagos",
    "Zaria, Kaduna",
    "Lekki, Lagos",
    "Warri, Delta",
  ]

  const artisansImages = [
    require("../../assets/images/searchImage1.png"),
    require("../../assets/images/searchImage2.png"),
    require("../../assets/images/searchImage3.png"),
    require("../../assets/images/searchImage4.png"),
    require("../../assets/images/searchImage5.png"),
    require("../../assets/images/searchImage6.png"),
    require("../../assets/images/searchImage7.png"),
  ]

  //to get the client details to render from endpoint
  const getClientProfile = () => {
    try {
      fetch(clientsURL, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(result => {
        if (result.status == 200){
          console.log(result.payload)
          setProfileDetails(result.payload)
          console.log(profileDetails)

        }
      })
    } catch (error) {
      console.log(error)
    }

  }

  //renders search result when input is entered
  const renderNews = ({ item, index }) => {
    if (artisansName[index].toLowerCase().includes(searchInput.toLowerCase().trim()) ){
      return (
        <TouchableOpacity
          onPress={() => {openArtisanProfile()}}
          key={item.key} 
        >
        <View style={styles.searchResultContainer}>
          <Image source={item} resizeMode='contain' />
          <Text style={styles.vendorName}>{artisansName[index]} </Text>
          <Text style={styles.vendorLocation}>{artisansLocation[index]} </Text>
        </View>
      </TouchableOpacity>
      )
    }
  }

  //Toggling the visibility state of the bottom sheet
  const toggleBottomNavigationView = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput 
          placeholder="Search..."
          onChangeText={(text) => setSearchInput(text)}
          value={searchInput}
          style={styles.searchTextInput} 
        />
        <TouchableOpacity 
          style={styles.searchButton}
          onPress={() => toggleBottomNavigationView()}
        >
          <MaterialCommunityIcons
            name="filter"
            color="white"
            mode="contained"
            size={24}
          />
        </TouchableOpacity>
      </View>
      <SubHeadingText text="TAILORS" />

      <ComponentDivider />

      {searchInput != '' ? (
        <FlatList 
          numColumns={3}
          data = {artisansImages}
          keyExtractor={(item, itemIndex) => itemIndex}
          renderItem={renderNews} 
        /> 

      ) : (

      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
      
            <ImagesViewPager navigation={navigation} />

            <SubHeadingText text="WEAVERS" />

            <ComponentDivider />

            <ImagesViewPager />

            {!isVisible ? <FilterBottomSheet /> : null}
          </View>
          <View style={styles.footer}></View>
        </ScrollView>
      </SafeAreaView>

      )}
    </View>
  )
    
};

export default Dashboard;
