import { Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
const CustomButton = ({ onPress, text }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '60%',
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        shadowRadius: 0,
        
        
    },
    text: {
        padding: 15,
        fontWeight: 'bold',
        color: '#fb8500',
    }
})
export default CustomButton;