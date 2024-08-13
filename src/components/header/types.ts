import { ImageSourcePropType, TextStyle, ViewStyle } from "react-native";

export interface HEADERPROPS {
    title?: string,
    img?: ImageSourcePropType,
    icon?: any,
    iconLeft?: any,
    onPress?: () => void,
    onPressLeft?: () => void,
    children?: React.ReactNode,
    styleTitle?: TextStyle,
    styleContainer?: ViewStyle    
}