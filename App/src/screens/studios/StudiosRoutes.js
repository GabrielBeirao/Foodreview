import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterStudio from './RegisterStudio';
import Studios from './Studios';
import RegisterSchedule from '../review/RegisterSchedule';
import StudiosSchedule from '../review/StudiosSchedule';

const Stack = createNativeStackNavigator();

const StudiosRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="MainStudios" component={Studios} />
                <Stack.Screen name="RegisterStudio" component={RegisterStudio} />
                <Stack.Screen name="RegisterSchedule" component={RegisterSchedule} />
                <Stack.Screen name="StudiosSchedule" component={StudiosSchedule} />
            </Stack.Navigator>
    )
}

export default StudiosRoutes