import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//ROUTES
import TabNavigator from './TabNavigator';
import InfoPokemon from '../views/InfoPokemon';
import Splash from '../views/splash';

const Stack = createStackNavigator();

const RootStack = () => {

        return (
            <Stack.Navigator
                initialRouteName="Splash"
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

                 <Stack.Screen
                    name="Splash"
                    component={Splash}
                />

            </Stack.Navigator>
    )
}

export default RootStack