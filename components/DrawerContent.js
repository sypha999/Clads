import { useState } from "react";
import { View, Text, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import ComponentDivider from "./ComponentDivider";
import { styles } from "./DrawerContentStyles";

const DrawerContent = ({ props, navigation }) => {
  const [profileImage, setProfileImage] = useState(
    require("../assets/images/profile_image_large.png")
  );
  const [profileName, setProfileName] = useState("Ijeoma Ibukun Babangida");

  const customNav = useNavigation()

  const openEditProfileScreen = () => {
    return navigation.navigate("Edit Profile");
  };

  const openHomeScreen = () => {
    return navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <MaterialCommunityIcons
          name="close"
          size={24}
          color="#0066F5"
          style={styles.closeIcon}
          onPress={() => navigation.closeDrawer()}
        />

        <View style={styles.profileInfoContainer}>
          <Image source={profileImage} style={styles.profileImage} />
          <Text style={styles.profileName}>{profileName}</Text>
          <View style={styles.editProfileButtonContainer}>
            <Button
              mode="contained"
              color="#0066F5"
              style={styles.editProfileButton}
              onPress={() => customNav.navigate('Edit Profile')}
            >
              Edit Profile
            </Button>
          </View>
        </View>

        <ComponentDivider />

        <TouchableWithoutFeedback style={styles.navDrawerTextContainer} onPress={() => customNav.navigate('Favourites')}>
          <View style={styles.navDrawerTextIcon}>
            <Ionicons name="heart" color="#0A2E65" size={24} />
            <Text style={styles.navDrawerText}>Favourites</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            color="#ADBACD"
            size={24}
          />
        </TouchableWithoutFeedback>

        <ComponentDivider />

        <TouchableWithoutFeedback style={styles.navDrawerTextContainer}>
          <View style={styles.navDrawerTextIcon}>
            <Ionicons name="power" color="#0A2E65" size={24} />
            <Text style={styles.navDrawerText}>Logout</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            color="#ADBACD"
            size={24}
          />
        </TouchableWithoutFeedback>

        <ComponentDivider />
      </DrawerContentScrollView>

      <View>
        <Text style={styles.versionText}>version 1.0</Text>
      </View>
    </View>
  );
};


export default DrawerContent;
