import { ImageProps, ImageSourcePropType } from "react-native";

export interface HEADERPROPS {
    title?: string,
    img?: ImageSourcePropType,
    icon?: any,
    iconLeft?: any,
    onPress?: () => void,
    onPressLeft?: () => void,
    children?: React.ReactNode,
}