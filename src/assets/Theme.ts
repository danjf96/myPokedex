import { Theme } from "@react-navigation/native/lib/typescript/src/types";
import 'styled-components/native'
interface ThemeApp extends Theme {
    colorsMenuHeader: string;
    padding: {
        container: string
    }
}
export const ThemeApp = (darkMode?: boolean) => <ThemeApp>{
    dark: false,
    colors: {
        primary: "",
        background: "white",
        card: "",
        text: "",
        border: "",
        notification: "",
    },
    padding: {
        container: '24px'
    }
}

// declare types theme
declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeApp {}
}