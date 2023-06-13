import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterSearch from './RegisterSchedule';
import Search from './Search'

const Stack = createNativeStackNavigator();

const SearchRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="ReviewsMain" component={Search} />
            </Stack.Navigator>
    )
}

export default SearchRoutes