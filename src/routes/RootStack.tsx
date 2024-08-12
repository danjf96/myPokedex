import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//ROUTES
import TabNavigator from './TabNavigator';

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
            </Stack.Navigator>
    )
}

export default RootStack