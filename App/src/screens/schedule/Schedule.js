// import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
// import React, { useContext, useEffect, useState } from 'react'
// import { Context } from '../../context/dataContext'
// import api from '../../api'
// import Stars from 'react-native-stars';
// import { Entypo } from "@expo/vector-icons";

// const StudiosSchedule = ({ navigation }) => {
//     const { state, dispatch } = useContext(Context)

//     const [schedule, setSchedule] = useState({});

//     useEffect(() => {
//         const onScreenLoad = async () => {
//             const list = await api.get('/schedule/findByUser', {
//                 params: {
//                     idUser: state.idUser,
//                   }
//             });
//             console.log(list);
//             setSchedule(list.data.schedule)
//             dispatch({type: "update", payload: false})
//         }
//         onScreenLoad();
//     }, [state.update]
//     )

//     return (
//         <View style={styles.view}>
//             <FlatList
//                 data={schedule}
//                 renderItem={({ item }) => {
//                     return (
//                         <View style={styles.container}>
//                             <View style={styles.text}>
//                                 <Text style={styles.item}>{item.studio.name}</Text>
//                                 <Text style={styles.title}>{item.comment}</Text>
//                                 <Stars
//                                     count={5}
//                                     display={item.stars}
//                                     half={false}
//                                     starSize={50}
//                                     fullStar={<Entypo name='star' style={[styles.myStarStyle]} />}
//                                     halfStar={<Entypo name='star' style={[styles.myStarStyle]} />}
//                                     emptyStar={<Entypo name='star-outlined' style={[styles.myEmptyStarStyle]} />}
//                                 />
//                             </View>
//                         </View>
//                     )
//                 }
//                 }
//                 keyExtractor={(item) => item.id}
//             />
//         </View>


//     )
// }

// export default StudiosSchedule

// const styles = StyleSheet.create({
//     view: {
//         flex: 1,
//         justifyContent: "center",
//     },
//     container: {
//         flexDirection: "row",
//         flexWrap: "wrap",
//         margin: 5,
//         padding: 10,
//         borderRadius: 10,
//         backgroundColor: 'lightblue',
//         alignItems: 'center'
//     },
//     text: {
//         height: 120,
//         width: '100%',
//         justifyContent: "center",
//     },
//     title: {
//         fontSize: 20,
//         margin: 5,
//         textAlign: 'center'
//     },
//     item: {
//         margin: 5,
//         fontSize: 15
//     },
//     icon: {
//         margin: 10
//     },
//     myStarStyle: {
//         color: 'orange',
//         backgroundColor: 'transparent',
//         textShadowColor: 'black',
//         textShadowOffset: { width: 1, height: 1 },
//         textShadowRadius: 2,
//         width: 50,
//         fontSize: 50
//     },
//     myEmptyStarStyle: {
//         color: 'gray',
//         width: 50,
//         fontSize: 50
//     }
// })

import React, { useState } from 'react';

const MusicRehearsalScheduler = () => {
  const [rehearsals, setRehearsals] = useState([]);
  const [newRehearsal, setNewRehearsal] = useState('');

  const handleInputChange = (event) => {
    setNewRehearsal(event.target.value);
  };

  const handleAddRehearsal = () => {
    if (newRehearsal.trim() !== '') {
      const rehearsal = {
        id: rehearsals.length + 1,
        description: newRehearsal,
        scheduled: false,
      };

      setRehearsals([...rehearsals, rehearsal]);
      setNewRehearsal('');
    }
  };

  const handleToggleRehearsal = (id) => {
    const updatedRehearsals = rehearsals.map((rehearsal) =>
      rehearsal.id === id ? { ...rehearsal, scheduled: !rehearsal.scheduled } : rehearsal
    );

    setRehearsals(updatedRehearsals);
  };

  return (
    <div>
      <h1>Agendamento de Ensaios Musicais</h1>
      <div>
        <input
          type="text"
          value={newRehearsal}
          onChange={handleInputChange}
          placeholder="Digite a descrição do ensaio"
        />
        <button onClick={handleAddRehearsal}>Adicionar Ensaio</button>
      </div>
      <ul>
        {rehearsals.map((rehearsal) => (
          <li
            key={rehearsal.id}
            onClick={() => handleToggleRehearsal(rehearsal.id)}
            style={{ textDecoration: rehearsal.scheduled ? 'line-through' : 'none' }}
          >
            {rehearsal.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicRehearsalScheduler;

// Neste código, temos o componente MusicRehearsalScheduler. Ele mantém dois estados: rehearsals, que é um array de objetos de ensaios, e newRehearsal, que armazena a descrição de um novo ensaio a ser adicionado.

// A função handleInputChange atualiza o estado newRehearsal à medida que o usuário digita no campo de entrada.

// A função handleAddRehearsal é acionada quando o usuário clica no botão "Adicionar Ensaio". Ela verifica se a entrada não está vazia, cria um novo objeto de ensaio com um ID único e define sua propriedade scheduled como false. O novo ensaio é adicionado ao estado rehearsals e o estado newRehearsal é redefinido.

// A função handleToggleRehearsal é chamada quando um item de ensaio é clicado. Ela alterna a propriedade scheduled do objeto de ensaio correspondente.

// No JSX, renderizamos um campo de entrada onde o usuário pode digitar a descrição de um ensaio. O valor do campo de entrada está vinculado ao estado newRehearsal e o evento onChange chama a função handleInputChange. Há também um botão que aciona a função handleAddRehearsal quando clicado.

// Abaixo disso, renderizamos uma lista de ensaios usando o estado rehearsals. Cada item de ensaio é exibido como um elemento <li>. Clicar em um item de ensaio aciona a função handleToggleRehearsal, que alterna a propriedade scheduled do ensaio correspondente. O atributo style define a decoração de texto como linha-riscada (line-through) se o ensaio estiver agendado.

// Você pode usar o componente MusicRehearsalScheduler em seu aplicativo para gerenciar e agendar ensaios musicais.