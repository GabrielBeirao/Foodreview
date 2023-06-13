import { StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/dataContext'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'

import Home from './Home'
import Studios from './studios/Studios'
import Schedule from './schedule/Schedule'
import Search from './search/Search'
import Settings from './Settings'

const Tab = createBottomTabNavigator();

const Routes = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)
  return (
    <Tab.Navigator screenOptions={{
        headerRight: () => (
            <Entypo
                name='log-out'
                size={20}
                style={{ margin: 10 }}
                color='#000'
                onPress={() => dispatch({type: 'logOut'})}
            />
        )
    }}>

    <Tab.Screen
        name='User'
        component={Home}
        options={{
            tabBarIcon: () => (
                <Entypo name='user' size={30} />
            )
        }}
    />

    <Tab.Screen
            name='Studios' 
            component={Studios} //Ultimos studios pesquisados
            options={{
                tabBarIcon: () => (
                    <Entypo name='star' size={30} />
                )
            }}
        />

    <Tab.Screen
            name='Search'
            component={Search}
            options={{
                tabBarIcon: () => (
                    <Entypo name='circle-with-plus' size={30} />
                )
            }}
        />

    <Tab.Screen
            name='Schedule'
            component={Schedule}
            options={{
                tabBarIcon: () => (
                    <Entypo name='calendar' size={30} />
                )
            }}
        />

    <Tab.Screen style={styles.menu}
            name='Settings'
            component={Settings}
            options={{
                tabBarIcon: () => (
                    <Entypo name='cog' size={30} />
                )
            }}
        />

    </Tab.Navigator>
  )
}

export default Routes

const styles = StyleSheet.create({})