import { Theme } from "@react-navigation/native/lib/typescript/src/types";

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
        background: "",
        card: "",
        text: "",
        border: "",
        notification: "",
    }
}