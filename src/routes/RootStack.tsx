import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//ROUTES
import TabNavigator from './TabNavigator';
import InfoPokemon from '../views/InfoPokemon';

const Stack = createStackNavigator();

const RootStack = () => {

        return (
            <Stack.Navigator
                initialRouteName="BottomTabs"
                screenOptions={{ gestureEnabled: false, headerShown: false }}
            >
                <Stack.Screen
                    name="BottomTabs"
                    component={TabNavigator}
                />  
                
                <Stack.Screen
                    name="InfoPokemon"
                    component={InfoPokemon}
                />

            </Stack.Navigator>
    )
}

export default RootStack