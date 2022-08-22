import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  textWrapper: {
    height: hp("90%"), // 70% of height device screen
    width: wp("100%"), // 80% of width device screen
  },

  componentdivider: {
    marginTop: 0,
  },
  profileTitle: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 18,
    padding: 4,
    height: hp("6.5%"),
  },
  avaterAndAddressView: {
    height: hp("24%"),
  },
  image: {
    width: wp("20%"),
    height: 100,
    alignSelf: "center",
    marginTop: -10,
  },
  profiledescription: {
    alignSelf: "center",
  },
  furtherDetails: {
    textAlign: "center",
  },
  chatButton: {
    borderColor: "blue",
    borderWidth: 2,
    width: 134,
  },
  multimediaButtonsView: {
    flexDirection: "row",
    height: hp("6.5%"),
    alignContent: "center",
    alignSelf: "center",
  },
  ratingAndStarsView: {
    flexDirection: "column",
  },
  favoriteIconView: {},
  ratingText: {
    marginLeft: 10,
    marginTop: 10,
  },
  ratings_FavoritesView: {
    flexDirection: "row",
    marginBottom: 4,
    height: hp("4%"),
    marginStart: 15,
  },
  ratingNumberText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  ratingStarsView: {},
  gallaryButton: {
    backgroundColor: "#0066F5",
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
