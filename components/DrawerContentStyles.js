import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
    },
    closeIcon: {
      textAlign: "right",
      marginBottom: 20,
    },
    profileInfoContainer: {
      alignItems: "center",
    },
    profileImage: {
      marginBottom: 20,
    },
    profileName: {
      marginBottom: 20,
      color: "#0A2E65",
      fontFamily: "Roboto_400Regular",
    },
    editProfileButtonContainer: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 20,
    },
    editProfileButton: {
      borderRadius: 20,
    },
    navDrawerTextIcon: {
      flexDirection: "row",
      alignItems: "center",
    },
    navDrawerTextContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 10,
    },
    navDrawerText: {
      marginLeft: 20,
      color: "#506992",
      fontSize: 15,
      fontFamily: "Poppins_400Regular",
    },
    versionText: {
      fontFamily: "Poppins_400Regular",
      fontSize: 13,
      textAlign: "right",
      marginBottom: 30,
      color: "#506992",
    },
  })