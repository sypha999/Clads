import { TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker'
import { BottomSheet } from 'react-native-btr';
import styles from '../screens/component.styles/FilterBottomSheetStyle'


export default function FilterBottomSheet() {
    const [isVisible, setIsVisible] = useState(false)
    const [clientPicker, setClientPicker] = useState();
    const [stylePicker, setStylePicker] = useState();
    const [locationPicker, setLocationPicker] = useState();

    const artisansList = [
        { artisansName: "Tailor", artisansValue: 'tailor' },
        { artisansName: "Weaver", artisansValue: 'weaver' },
    ]
    
    const stylesList = [
        { styleName: "Agbada", styleValue: 'agbada' },
        { styleName: "Gown", styleValue: 'gown' },
        { styleName: "Suit", styleValue: 'suit' },
    ]
    
    const locationList = [
        { locationName: "Abuja", locationValue: "abuja" },
        { locationName: "Lagos", locationValue: "lagos" },
        { locationName: "Port-Harcout", locationValue: "port-harcourt" },
        { locationName: "Warri", locationValue: "warri" },
    ]

    //renders styles artisans component
    const renderArtisansList = () => {
        return artisansList.map((state, index) => {
            return <Picker.Item key={index} label={state.artisansName} value={state.artisansValue} style={{fontSize: 14}}/>
        })
    }
    
    //renders styles picker component
    const renderStylessList = () => {
        return stylesList.map((state, index) => {
            return <Picker.Item key={index} label={state.styleName} value={state.styleValue} style={{fontSize: 14}}/>
        })
    }

    //renders location picker component
    const renderLocationsList = () => {
        return locationList.map((state, index) => {
            return <Picker.Item key={index} label={state.locationName} value={state.locationValue} style={{fontSize: 14}}/>
        })
    }

    //Toggling the visibility state of the bottom sheet
    const toggleBottomNavigationView = () => setIsVisible(!isVisible);

    const handleFilter = () => {
        setIsVisible(!isVisible)
    }

    return (
        <View style={styles.container}>

            <BottomSheet
                visible={!isVisible}
                onBackButtonPress={toggleBottomNavigationView}
                onBackdropPress={toggleBottomNavigationView}
            >
                <View style={styles.bottomNavigationView}>
                    <View style={styles.filterView}>
                        <Text onPress={() => setIsVisible(false)} style={styles.filterHeader}>Filter By</Text>

                        <View >
                            <View style={styles.pickerContainer}>
                                <Picker
                                    // style={styles.pickerContainer}
                                    mode='dropdown'
                                    selectedValue={clientPicker}
                                    onValueChange={(itemValue, itemIndex) => setClientPicker(itemValue)}
                                >
                                    <Picker.Item value='' label='Artisan' enabled={false} color="#C5C5C5"/>
                                    {renderArtisansList()}
                                </Picker>
                            </View>   

                            <View style={styles.pickerContainer}>
                                <Picker
                                    // style={styles.filterInput}
                                    mode='dropdown'
                                    selectedValue={stylePicker}
                                    onValueChange={(itemValue, itemIndex) => setStylePicker(itemValue)}
                                >
                                    <Picker.Item value='' label='Style' enabled={false} color="#C5C5C5"/>
                                    {renderStylessList()}
                                </Picker>
                            </View>
            
                            <View style={styles.pickerContainer}>
                                <Picker
                                    // style={styles.filterInput}
                                    mode='dropdown'
                                    selectedValue={locationPicker}
                                    onValueChange={(itemValue, itemIndex) => setLocationPicker(itemValue)}
                                >
                                    <Picker.Item value='' label='Location' enabled={false} color="#C5C5C5"/>
                                    {renderLocationsList()}
                                </Picker>
                            </View>

                            <TouchableOpacity
                                onPress={() => {handleFilter()}}
                                style={styles.filterButton}
                            >
                                <Text style={styles.caption}>FILTER</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </BottomSheet>
        </View>
    )
}
