import { Text, StyleSheet } from 'react-native'

const SubHeadingText = ({ text }) => (
    <Text style={styles.textStyle}>{text}</Text>
)

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Poppins_400Regular', 
        fontSize: 18, 
        marginTop: 55, 
		color: '#ADBACD', 
        fontWeight: 'bold', 
        letterSpacing: 3
    }
})

export default SubHeadingText