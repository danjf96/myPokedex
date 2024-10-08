import { Theme } from "@react-navigation/native/lib/typescript/src/types";
import 'styled-components/native'
import { Platform } from "react-native";
interface ThemeApp extends Theme {
    colorsMenuHeader: string;
    padding: {
        container: string,
        card: string,
    },
    customColors: {
        error: string,
        warning: string,
        success: string,
        info: string,
        activeTabBottom: string,
        inactiveTabBottom: string,
        loading: string
    },
    font: string,
    linearGradient: any
}
export const ThemeApp = (darkMode?: boolean) => <ThemeApp>{
    dark: false,
    colors: {
        primary: "#FF1C1C",
        background: "white",
        card: "",
        text: '#262626',
        border: "#9A9A9A",
        notification: "",
    },
    padding: {
        container: '12px',
        card: '5px'
    },
    customColors: {
        error: '#E54A4A',
        warning: '#FDBA34',
        success: '#20A67B',
        info: '#2870FB',
        activeTabBottom: '#2870FB',
        inactiveTabBottom: 'black',
        loading: '#FF1C1C'
    },
    font: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto',
    linearGradient: ['white', '#f7f7f7', '#e6e6e6']
}

// declare types theme
declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeApp {}
}