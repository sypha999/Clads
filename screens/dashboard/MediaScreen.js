import React, { useState, useEffect } from "react";
import { Text, View, Image, FlatList, Modal, TextInput } from "react-native";
import { Button } from "react-native-elements";
import CustomFAB from "../../components/CustomFAB";
import * as ImagePicker from "expo-image-picker";
import styles from "./MediaScreenStyles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";

const MediaScreen = ({ navigation }) => {
  const url = "https://darot-image-upload-service.herokuapp.com/api/v1/upload";

  const noImageIcon = require("../../assets/images/mediascreen_no_image.png");

  const [descriptionText, setDescriptionText] = useState("");

  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false)
  const [imageDescription, setImageDescription] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const tokenData = useSelector((state) => state.token);

  const pickImage = async () => {
    try {
      let permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === true) {
        return;
      }
      //send the image to backend
      setImage([...image, { localUri: pickerResult.uri }]);

      setModalVisible(true);
    } catch (err) {
      console.log("err", err);
    }
  };

  //function to load image from api
  const loadImagesFromApi = () => {
    setLoading(true)
    console.log('loading')
    const APIURL = 'https://clads-service.herokuapp.com/api/v1/images'
    fetch(APIURL, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${tokenData}`,
      },
    })
      .then((response) => response.json())
      .then((imagesData) => {
        setLoading(false)
        console.log(imagesData);
      })
      .catch((err) => console.log(err));

  };

  const _renderItem = ({ item, index }) => (
    <TouchableWithoutFeedback
      style={styles.imagesContainer}
      onPress={() =>
        navigation.navigate("ImageFullScreen", {
          imageUri: item.localUri,
          title: imageDescription[index],
        })
      }
    >
      <View>
        <Image source={{ uri: item.localUri }} style={styles.thumbnail} />
        <Text style={styles.descriptionText}>{imageDescription[index]}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  const onTextChanged = (text) => {
    setDescriptionText(text);
  };
  const uploadImage = async () => {
    const formData = new FormData();

    // console.log(image);
    const imageUri = image[image.length - 1].localUri;
    // console.log(imageUri);

    //console.log(imageUri);

    formData.append("file", {
      uri: imageUri,
      name: "image",
      type: "image/jpg",
    });
    // console.log(formData);
    //console.log(image[image.length - 1].localUri);

    fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadImagesFromApi()
  }, [])

  if (image.length > 0) {
    return (
      <View style={styles.imageContainer}>
        <FlatList
          data={image}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={_renderItem}
          keyExtractor={(item) => item.localUri}
          onRefresh={() => loadImagesFromApi()}
          refreshing={loading}
        />
        <View style={styles.modalContainer}>
          <Modal
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.modalText}>
              Enter description of selected image
            </Text>
            <TextInput
              style={styles.modalTextInput}
              onChangeText={onTextChanged}
            />
            <Button
              title="Save"
              buttonStyle={styles.modalButton}
              titleStyle={styles.modalButtonTitle}
              onPress={() => {
                setModalVisible(!modalVisible);
                setImageDescription([...imageDescription, descriptionText]);
                uploadImage();
              }}
            />
          </Modal>
        </View>

        <CustomFAB openGallery={pickImage} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.noImageContainer}>
        <Image source={noImageIcon} />
        <Text style={styles.noImageText}>
          You have no photo in your gallery
        </Text>
      </View>
      <CustomFAB openGallery={pickImage} />
    </View>
  );
};

export default MediaScreen;
