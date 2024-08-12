import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../views/home";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return <Tab.Navigator 
                initialRouteName="Home" 
                screenOptions={{ headerShown: false, tabBarIcon: (props)=>null }}
            >
        <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
}

export default TabNavigator