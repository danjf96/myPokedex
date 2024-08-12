import { ImageProps, ImageSourcePropType } from "react-native";

export interface HEADERPROPS {
    title?: string,
    img?: ImageSourcePropType,
    icon?: any,
    onPress?: () => void,
    children?: React.ReactNode,
}