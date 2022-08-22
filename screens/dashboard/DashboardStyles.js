import { StyleSheet, Dimensions } from "react-native"

const {deviceHeight, deviceWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 14,
        height: deviceHeight,
        width: deviceWidth
    },
    searchContainer: {
        flexDirection: 'row',
        marginTop: 30,
        height: 38,
        justifyContent: 'center'
    },
    searchTextInput: {
        borderWidth: 2, 
        width: '80%',
        backgroundColor: 'transparent', 
        fontSize: 15, 
        paddingTop: 5, 
        paddingBottom: 5, 
        paddingLeft: 15, 
        borderRadius: 5, 
        borderColor: '#E8F0FE', 
        fontFamily: 'Poppins_400Regular',
    },
    searchButton: {
        backgroundColor: '#0066f5',
        borderRadius: 5, 
        paddingHorizontal: 6,
        marginLeft: 5,
        paddingTop: 6,
        marginVertical: 2
    },
    filterContainer: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 15,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    dropDownPicker: {
        borderColor: '#E8F0FE',
        borderWidth: 3
    },
    filterInput: {
        marginRight: 18
    },
    filterIcon: {
        marginRight: 18
    }, 
    filterTitle: {
        color: '#0A2E65',
        fontSize: 18
    },
    searchResultContainer: {
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center'
    },
    vendorName: {
        flexWrap: "wrap",
        fontFamily: "Poppins_400Regular",
        fontWeight: "bold",
        letterSpacing: 1,
        fontSize: 13,
        width: 100,
    },
    vendorLocation: {
        fontFamily: "Poppins_400Regular",
        fontSize: 12,
    },
    footer: {
        backgroundColor: 'white', 

    }
})

export default styles