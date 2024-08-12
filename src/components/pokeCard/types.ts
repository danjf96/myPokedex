import React from "react";
import { ImageSourcePropType, ViewProps } from "react-native";

export interface POKECARDPROPS {
    name: string,
    url: string,
    number: number,
    captureAction: () => void,
    onPress?: () => void,
    img?:  ImageSourcePropType,
    captured?: boolean
}
