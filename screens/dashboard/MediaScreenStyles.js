import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 0,
        backgroundColor: 'white'
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 15,
        paddingLeft: '3%',
        paddingRight: '5%',
        backgroundColor: 'white',
        alignItems: 'flex-start',
    },
    imagesContainer: {
        marginHorizontal: '3%',
        marginBottom: 20,
    },
    noImageContainer: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    noImageText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        marginTop: 20,
        color: '#506992',
    },
    view: {
        backgroundColor: 'red',
    },
    thumbnail: {
        width: 150,
        height: 130,
        marginBottom: 5,
    },
    descriptionText: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 16
    },
    fabStyle: {
        marginBottom: 30,
        marginEnd: 30,
        elevation: 10
    },
    modalContainer: {
        marginHorizontal: 10,
        alignItems: 'center'
    },
    modalText: {
        marginHorizontal: 10, 
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    modalTextInput: {
        borderWidth: 1, 
        padding: 10, 
        marginVertical: 10, 
        marginHorizontal: 10,
        fontSize: 16
    },
    modalButton: {
        padding: 10, 
        marginHorizontal: 10, 
        marginVertical: 10,
    },
    modalButtonTitle: {
        fontSize: 18
    }
})

export default styles