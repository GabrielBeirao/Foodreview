import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import { DataContext, Fornecedor } from '../context/dataContext'
import CustomButton from '../components/CustomButton.js'


const Home = () => {
  //Fornecedor >>> fornece valores e funcoes de um determinado contexto
 const actualState = useContext(DataContext)
  return (
    <View style ={styles.container}>

      <Text style={styles.text}>Home</Text>
      <Text style={styles.text}>{actualState.state.counter}</Text>

      <CustomButton 
        text="Aumentar"
        onPress={() => actualState.dispatch({type: "Aumentar", payload:10})}
        />
      <CustomButton 
        text="Diminuir"
        onPress={() => actualState.dispatch({type: "Diminuir", payload:10})}
        />

      <CustomButton 
        text="Zerar"
        onPress={() => actualState.dispatch({type: "Zerar"})}
        />

        { actualState.state.showMessage ? <Text>SOCOOOOOOOOOORRO!!!!!!!!!!</Text> : null }

        <CustomButton 
        text="Mostrar"
        onPress={() => actualState.dispatch({type: "Mostrar"})}
        />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: "center",
      backgroundColor: ''

    },

    text: {
      fontSize: 30,
      color: 'black',

    },

    button: {
      color: 'red'
    }
})
export default () => {
  return (
    //TODA A HOME está dentro de FORNECEDOR!! Logo, não preciso usar o "fornecedor" em la em cima
  
    <Fornecedor>
      <Home />
    </Fornecedor>

  )
}