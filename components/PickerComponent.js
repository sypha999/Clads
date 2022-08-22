import { useState } from "react";
import { View, Text, Modal } from "react-native";
import {Picker} from '@react-native-picker/picker'


const PickerComponent = ({pickerData, onChange }) => {
    
    const [selectedState, setSelectedState] = useState();
    const [pickerError, setPickerError] = useState("")

    const statesList = [
        {
            stateName: 'Abia',
            stateValue: 'Abia'
        },
        {
            stateName: 'Adamawa',
            stateValue: 'Adamawa'
        },
        {
            stateName: 'Akwa Ibom',
            stateValue: 'Akwa Ibom'
        },
        {
            stateName: 'Anambra',
            stateValue: 'Anambra'
        },
        {
            stateName: 'Bauchi',
            stateValue: 'Bauchi'
        },
        {
            stateName: 'Bayelsa',
            stateValue: 'Bayelsa'
        },
        {
            stateName: 'Benue',
            stateValue: 'Benue'
        },
        {
            stateName: 'Borno',
            stateValue: 'Borno'
        },
        {
            stateName: 'Cross River',
            stateValue: 'Cross River'
        },
        {
            stateName: 'Delta',
            stateValue: 'Delta'
        },
        {
            stateName: 'Edo',
            stateValue: 'Edo'
        },
        {
            stateName: 'Ekiti',
            stateValue: 'Ekiti'
        },
        {
            stateName: 'Enugu',
            stateValue: 'Enugu'
        },
        {
            stateName: 'Gombe',
            stateValue: 'Gombe'
        },
        {
            stateName: 'Imo',
            stateValue: 'Imo'
        },
        {
            stateName: 'Jigawa',
            stateValue: 'Jigawa'
        },
        {
            stateName: 'Kaduna',
            stateValue: 'Kaduna'
        },
        {
            stateName: 'Kano',
            stateValue: 'Kano'
        },
        {
            stateName: 'Katsina',
            stateValue: 'Katsina'
        },
        {
            stateName: 'Kebbi',
            stateValue: 'Kebbi'
        },
        {
            stateName: 'Kogi',
            stateValue: 'Kogi'
        },
        {
            stateName: 'Kwara',
            stateValue: 'Kwara'
        },
        {
            stateName: 'Lagos',
            stateValue: 'Lagos'
        },
        {
            stateName: 'Nassarawa',
            stateValue: 'Nassarawa'
        },
        {
            stateName: 'Niger',
            stateValue: 'Niger'
        },
        {
            stateName: 'Ogun',
            stateValue: 'Ogun'
        },
        {
            stateName: 'Ondo',
            stateValue: 'Ondo'
        },
        {
            stateName: 'Osun',
            stateValue: 'Osun'
        },
        {
            stateName: 'Oyo',
            stateValue: 'Oyo'
        },
        {
            stateName: 'Plateau',
            stateValue: 'Plateau'
        },
        {
            stateName: 'Rivers',
            stateValue: 'Rivers'
        },
        {
            stateName: 'Sokoto',
            stateValue: 'Sokoto'
        },
        {
            stateName: 'Taraba',
            stateValue: 'Taraba'
        },
        {
            stateName: 'Yobe',
            stateValue: 'Yobe'
        },
        {
            stateName: 'Zamfara',
            stateValue: 'Zamfara'
        },
        {
            stateName: 'FCT Abuja',
            stateValue: 'FCT Abuja'
        },
    ]
    
    const pickerValidation = (itemValue) => {
        if(itemValue == "State") {
           setPickerError("select a valid state")
        }
        else {
            setSelectedState(itemValue)
        }
    }

    const renderStateList = () => {
        return statesList.map((state, index) => {
          return <Picker.Item key={index} label={state.stateName} value={state.stateValue} style={{fontSize: 18}}/>
        })
      }

    return(
        <View >
            <Picker
                mode='dropdown'
                selectedValue={pickerData}
                onValueChange={(value)=>onChange(value)}
            >
                <Picker.Item value='' label='State' enabled={false} />
                {renderStateList()}
            </Picker>

            
        </View>
    )
}

export default PickerComponent


