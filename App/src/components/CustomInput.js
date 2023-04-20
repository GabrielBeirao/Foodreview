import { Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { View } from 'react-native-web';
import { shadow } from 'react-native-paper';
const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {

    // const mostrarAlteracao = (novoValor) => {
    //     setValue(novoValor);
    //     console.log("O novo valor do campo " +  placeholder + " é " + novoValor);

    // }

    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    //container é o que fica por FORA!! - aqui no caso, tá com a cor roxa, sombra e borda leve
    container: {
        backgroundColor: '#ffafcc',
        width: '100%',
        marginVertical: 5,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        shadowRadius: 0
        

    },
    input: {
        //input é o que fica POR DENTRO - aqui está cinza dentro com o texto em negrito
        padding: 15,
        fontWeight: 'bold',
    
    }
})
export default CustomInput;