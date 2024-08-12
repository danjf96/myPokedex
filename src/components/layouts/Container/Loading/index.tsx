import React from 'react';
import { ActivityIndicator } from "react-native";

const Loading: React.FC<{ visible: boolean }> = ({visible}) => {
    return visible ? <ActivityIndicator style={{ margin: 10 }} color={'red'} size={'large'}  /> : null
}

export default Loading