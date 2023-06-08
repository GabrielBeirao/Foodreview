import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterSchedule from './RegisterSchedule';
import Schedule from './Schedule'

const Stack = createNativeStackNavigator();

const ScheduleRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="ReviewsMain" component={Schedule} />
            </Stack.Navigator>
    )
}

export default ScheduleRoutes