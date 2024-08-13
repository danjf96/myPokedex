import React from 'react';
import Svg, {
    Path,
} from 'react-native-svg';

const IconArrowLeft = ({ width = 22, height = 21, viewBox = "0 0 22.702 21.928", fill = 'black'}) => {
    return (
        <Svg height={height} width={width} viewBox={viewBox} fill={fill} >
           <Path   d="M11.629,12.553c4.356.341,10.018,2.844,10.018,9.375h.979c.084-.925.693-8.982-3.653-13.74a10.506,10.506,0,0,0-7.344-3.352V0L0,9.044,11.629,18.1Z"/>
        </Svg>
    )

}


export default IconArrowLeft