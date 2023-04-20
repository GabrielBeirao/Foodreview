import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { DataContext, Fornecedor } from '../context/dataContext'

const Teste = () => {
    const data = useContext(DataContext)
    return (
        <text>{data}</text>
        //Esse arquivo tem acesso a qualquer coisa q o FORNECEDOR fornece, pois ele está dentro do campo de atuação do fornecedor
  )
}

export default () => {
  return (
    //estou exportando o componente fornecedor junto com o teste. Logo, não preciso usar o fornecedor na Home.js
  
    <Fornecedor>
      <Teste />
    </Fornecedor>

  )
}