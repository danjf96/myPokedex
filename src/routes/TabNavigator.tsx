import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../views/home";
import IconSimplePokebola from "../assets/icons/IconSimplePokebola";
import IconPokedex from "../assets/icons/IconPokedex";
import { ThemeApp } from "../assets/Theme";
import CapturedPokemons from "../views/capturedPokemons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator 
            initialRouteName="Home" 
            screenOptions={{ 
                tabBarActiveTintColor: ThemeApp(false).customColors.activeTabBottom,
                tabBarInactiveTintColor: ThemeApp(false).customColors.inactiveTabBottom,
                headerShown: false, 
                tabBarLabel:() => {return null} 
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <IconPokedex fill={color}  opacity={focused ? 1 : 0.2} />
                    ),
                }}
            />

            <Tab.Screen 
                name="CapturedPokemons" 
                component={CapturedPokemons} 
                options={{
                    tabBarIcon: ({ color, size, focused }) => (<IconSimplePokebola width={40} height={40} fill={color} fillShadow={color}  opacity={focused ? 1 : 0.2} />),
                }}
            />        
        </Tab.Navigator>
    )
}

export default TabNavigator