import { StyleSheet, Dimensions } from 'react-native';

const {deviceHeight, deviceWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: deviceHeight,
        width: deviceWidth,
        
    },
    caption: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: 'center'
    },
    bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 380,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    filterView: {
        marginTop: 30,
        marginHorizontal: 20,
        
    },
    filterHeader: {
        marginBottom: 16,
        fontSize: 18,
        fontStyle: 'normal',
        color: '#393939',
        fontWeight: '500',
        letterSpacing: 0.3,
    },
    pickerContainer: {
        borderColor: "#C4C4C4",
        borderWidth: 0.7,
        borderRadius: 6,
        marginBottom: 16,
    },
    filterButton: {
        alignSelf: 'center',
        marginHorizontal: 20,
        height: 48,
        width: '100%',
        backgroundColor: "#0066F5",
        borderRadius: 5,
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 32
    },
})

export default styles
