import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/dataContext'
import api from '../../api'
import { Entypo } from '@expo/vector-icons'
import CustomButton from '../../components/CustomButton'

const Studios = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    const [studios, setStudios] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/studios/find');
            setStudios(list.data.studios)
            dispatch({type: "update", payload: false})
        }
        onScreenLoad();
    }, [state.update]
    )

    const seeSchedule = async (item) => {
        await dispatch({type: 'setStudios', payload: item});
        navigation.navigate('StudiosSchedule');
    }

    const newSchedule = async (item) => {
        await dispatch({type: 'setStudio', payload: item});
        navigation.navigate('RegisterSchedule')
    }

    return (
        <View style={styles.view}>
            {state.isAdmin ? (
                <CustomButton text="Studios pesquisados" onPress={() => navigation.navigate("RegisterStudio")} />
            ) : (
                <></>
            )}
            <FlatList
                data={studios}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.text} onPress={() => seeSchedule(item)}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.item}>{item.type}</Text>
                                    <Text style={styles.item}>{item.description}</Text>
                                    <Text style={styles.item}>{item.address}</Text>
                            </TouchableOpacity>
                            <Entypo
                                name="squared-plus"
                                size={60}
                                color="green"
                                style={styles.icon}
                                onPress={() => newSchedule(item)}
                            />
                        </View>
                    )
                }
                }
                keyExtractor={(item) => item.id}
            />
        </View>


    )
}

export default Studios

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
    },
    button: {
        marginBottom: 20
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        alignItems: 'center'
    },
    text: {
        height: 120,
        width: '80%',
        justifyContent: "center",
    },
    title: {
        fontSize: 30
    },
    item: {
        fontSize: 15
    },
    icon: {
        margin: 0
    }
})