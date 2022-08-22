import { View, Text, Image, TextInput, TouchableOpacity, FlatList, ScrollView, SafeAreaView, } from 'react-native';
import React, { useState } from 'react';
import styles from '../screen.styles/ReviewsScreen.style';
import  Rating from 'react-native-easy-rating';
import * as Progress from 'react-native-progress';

export default function ReviewsScreen() {
    const [rating, setRating] = useState(0);
    const [input, setInput] = useState("");

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          name: 'Olaleye David',
          body: 'Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. '
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          name: 'Haruna Ismaila',
          body: 'Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. '
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          name: 'Yusuf Ikechi',
          body: 'Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. kjbbclbcldckadckackavfcvabvc,d cgadcv hcjhvcvcbvc, wa wa wa wa warisi '
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d86',
          name: 'Hakeem Animashaun',
          body: 'Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. kjbbclbcldckadckackavfcvabvc,d cgadcv hcjhvcvcbvc, wa wa wa wa wa warisi '
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileView}>
                <Image style={styles.profileImage} source={require('../../assets/artisansReviewIcon.png')} />
                <Text style={styles.profileName} >JJ Fashionista Limited</Text>
            </View>
            <View style={styles.artisansRatingView} >
                <View style={styles.ratingView}>
                    <Text style={styles.ratingNumber} >
                        4.0
                    </Text>
                    <View style={styles.ratingStarView} >
                    <Rating
                        rating={4}
                        max={4}
                        iconWidth={16}
                        iconHeight={16}
                        iconSelected={require('../../assets/ratingStarIcon.png')}
                        iconUnselected={require('../../assets/ratingStarIconUnselected.png')}/>

                    </View>
                    <Text style={styles.reviewsNumber}>325</Text>
                </View>
                <View >
                    <View style={styles.sinlgeProgressBarView}>
                        <Text style={styles.progressText}>5</Text>
                        <Progress.Bar 
                        progress={1} 
                        style={styles.ratingProgressBar}
                        />
                    </View>
                    <View style={styles.sinlgeProgressBarView} >
                        <Text style={styles.progressText} >4</Text>
                        <Progress.Bar 
                        progress={0.8} 
                        style={styles.ratingProgressBar}
                        />
                    </View>
                    <View style={styles.sinlgeProgressBarView} >
                        <Text style={styles.progressText} >3</Text>
                        <Progress.Bar 
                        progress={0.6} 
                        style={styles.ratingProgressBar}
                        />
                    </View>
                    <View style={styles.sinlgeProgressBarView} >
                        <Text style={styles.progressText} >2</Text>
                        <Progress.Bar 
                        progress={0.4} 
                        style={styles.ratingProgressBar}
                        />
                    </View>
                    <View style={styles.sinlgeProgressBarView} >
                        <Text style={styles.progressText} >1</Text>
                        <Progress.Bar 
                        progress={0.2} 
                        style={styles.ratingProgressBar}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.rateArtisansView}>
                <Text style={styles.artisansName}>
                    Rate JJ Fashionista Limited
                </Text>
                <Rating
                    rating={rating}
                    max={5}
                    iconWidth={28}
                    iconHeight={28}
                    iconSelected={require('../../assets/ratingStarIcon.png')}
                    iconUnselected={require('../../assets/ratingStarIconUnselected.png')}
                    onRate={(rating) => {setRating(rating)}}/>
            </View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setInput(text)}
                    onSubmitEditing={() => {setInput("")}}
                    value={input}
                    placeholder={"Describe your experience (optional)"}
                    placeholderTextColor='#ADBACD'
                    underlineColorAndroid={'transparent'}
            />
            <View style={styles.textInputBorder} ></View>
            <TouchableOpacity style={styles.touchButton} onPress={() => console.log("clicked post review ")}>
                <Text style={styles.buttonText}>Post</Text>
            </TouchableOpacity>

            <FlatList
                data = {DATA}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.comments}>
                        <View style={styles.commentsBody}>
                            <View style={styles.reviewHeader}>
                                <TouchableOpacity >
                                    <Image source={require('../../assets/profileTag.png')} />
                                </TouchableOpacity>
                                <View style={styles.userDetails}>
                                    <Text style={styles.commentsName}>{item.name}</Text>
                                    <View style={styles.starsAndDate}>
                                        <Rating
                                            rating={5}
                                            max={5}
                                            iconWidth={14}
                                            iconHeight={14}
                                            iconSelected={require('../../assets/ratingStarIcon.png')}
                                            iconUnselected={require('../../assets/ratingStarIconUnselected.png')}
                                            />
                                            <Text style={styles.date}>01-09-2020</Text>
                                    </View>
                                </View>
                                <TouchableOpacity >
                                    <Image style={styles.dragIndicator} source={require('../../assets/dragIndicator.png')}/>
                                </TouchableOpacity>
                            </View>
                            
                            <Text style={styles.bodyText}>{item.body}</Text>
                        </View>
                    </View>)}
                />

        </SafeAreaView>
    )
}