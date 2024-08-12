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
        info: string
    },
    font: string
}
export const ThemeApp = (darkMode?: boolean) => <ThemeApp>{
    dark: false,
    colors: {
        primary: "#E54A4A",
        background: "white",
        card: "",
        text: '#353535',
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
        info: '#2870FB'
    },
    font: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto'
}

// declare types theme
declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeApp {}
}