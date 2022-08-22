import { StyleSheet } from 'react-native'
import { FAB } from 'react-native-elements'

const CustomFAB = ({openGallery}) => (
    <FAB 
        visible={true}
        icon={{ name: 'add', color: 'white' }}
        size='large'
        color='#0066F5'
        placement='right'
        onPress={openGallery}
        style={styles.fabStyle}
    />
)

const styles = StyleSheet.create({
    fabStyle: {
        marginBottom: 30,
        marginEnd: 30,
        elevation: 10
    }
})

export default CustomFAB