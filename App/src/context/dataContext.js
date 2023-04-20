//use reducer exporta um conjunto de variaveis e um conjunto de funcoes
import React, {useReducer} from "react";

//esse é o estado inicial das minhas variaveis. Se eu der um F5 na página, voltará a esse estado inicial.
let inicialState = {
    counter: 0,
    showMessage: false
}

const reducer = (state, action) => {
    switch(action.type){
        case "Aumentar":
            return { ...state, counter: state.counter + action.payload}

        case "Diminuir": 
            return {...state, counter: state.counter - action.payload}

        case "Zerar":
            return {...state, counter: state.counter = 0}

        case "Mostrar":
            return {...state, showMessage: !state.showMessage}

        default:
            return state
    }
}

export const DataContext = React.createContext();

//qualquer tela q tenha acesso ao valor 5, terá acesso ao children
//funcao usada sempre para retornar o contexto
// dispach é a mesma coisa que "ações". É um tipo de ação
export const Fornecedor = ({children}) => {
    const [state, dispatch] = useReducer(reducer, inicialState)
    return(
        <DataContext.Provider value={{state, dispatch}}>
            {children} 
        </DataContext.Provider>
    )
}
