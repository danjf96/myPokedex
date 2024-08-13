import React from "react";
import { ImageSourcePropType, ViewProps } from "react-native";

export interface POKECARDPROPS {
    name: string,
    url: string,
    number: number,
    captureAction: (poke: LISTPOKES) => void,
    onPress: (url: string) => void,
    img?:  ImageSourcePropType,
    captured?: boolean
}
