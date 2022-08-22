import React from "react";
import { View, Text, Image } from "react-native";
import ComponentDivider from "../../../components/ComponentDivider";
import ProfileAvartar from "./../../../assets/images/ProfileAvartar.png";
import { Button } from "react-native-elements";
import ButtonBlue from "../../../components/ButtonBlue";
import RatingComponent from "../../../components/Ratings";
import ArtisanProfileStyle from "./ArtisanProfileStyle";
import HeartIcon from "../../../components/HeartIcon";

const ArtisanProfile = () => {

  
  return (
    <View style={ArtisanProfileStyle.container}>
      <View style={ArtisanProfileStyle.textWrapper}>
        <Text style={ArtisanProfileStyle.profileTitle}>
          JJ Fashionsta Limited Profile
        </Text>

        <ComponentDivider />
        <View style={ArtisanProfileStyle.avaterAndAddressView}>
          <Image
            style={ArtisanProfileStyle.image}
            source={ProfileAvartar}
            resizeMode="contain"
          />
          <Text style={ArtisanProfileStyle.profiledescription}>
            JJ Fashionstat Limited
          </Text>
          <Text style={ArtisanProfileStyle.profiledescription}>
            24 Akonwojo Road, Egbeda
          </Text>
        </View>

        <ComponentDivider style={ArtisanProfileStyle.componentdivider} />

        <View>
          <Text style={ArtisanProfileStyle.furtherDetails}>
            Thank you for your time and consideration. I’m looking forward to
            learning more details about the software Engineer position at
            Bleeding Spoons.
          </Text>
        </View>

        <ComponentDivider />
        <View style={ArtisanProfileStyle.multimediaButtonsView}>
          <Button
            title="Chat"
            icon={{
              name: "comment",
              type: "font-awesome",
              size: 15,
              color: "#0066F5",
            }}
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{ fontStyle: "normal", color: "#0066F5" }}
            buttonStyle={{
              backgroundColor: "#fff",
              borderColor: "#0066F5",
              borderWidth: 2,
              borderRadius: 5,
            }}
            containerStyle={{
              width: 134,
              marginRight: 7,
            }}
          />
          <Button
            title="Call"
            icon={{
              name: "phone",
              type: "font-awesome",
              size: 15,
              color: "#219653",
            }}
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{ fontWeight: "700", color: "#219653" }}
            buttonStyle={{
              backgroundColor: "#E5E5E5",
              borderColor: "#219653",
              borderWidth: 2,
              borderRadius: 5,
            }}
            containerStyle={{
              width: 134,
              marginLeft: 7,
            }}
          />
        </View>
        <ComponentDivider style={ArtisanProfileStyle.componentdivider} />
        <View style={ArtisanProfileStyle.ratings_FavoritesView}>
          <View style={ArtisanProfileStyle.ratingAndStarsView}>
            <Text>Rating</Text>
            <Text style={ArtisanProfileStyle.ratingNumberText}>4.0</Text>

            <RatingComponent style={ArtisanProfileStyle.ratingStarsView} />
            <Text>See Reviews</Text>
          </View>

          <View style={{ marginLeft: 120 }}>
            <HeartIcon />
            <Text>Add Favorites</Text>
          </View>
        </View>
        <View style={{ marginTop: 90 }}>
          <ButtonBlue
            style={ArtisanProfileStyle.gallaryButton}
            caption="Go to gallery"
          />
        </View>
      </View>
    </View>
  );
};

export default ArtisanProfile;
