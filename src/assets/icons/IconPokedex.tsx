import React from 'react';
import Svg, {
    G,
    Path,
    Rect,
    Circle
} from 'react-native-svg';

const IconPokedex = ({ width = 40, height = 40, viewBox = "0 0 40 40", fill= "#C74343", fillShadow = "#AB3434", opacity = 1}) => {
    return (
        <Svg height={height} width={width} viewBox={viewBox} opacity={1}>
            
            <G>
                <Rect x="10" y="17" fill={"#AB3434"} width="17" height="6"/>
            </G>
            <G>
                <Path fill={"#E1EBF2"} d="M27.5,34.5c-3.309,0-6-2.691-6-6s2.691-6,6-6h6c3.309,0,6,2.691,6,6s-2.691,6-6,6H27.5z"/>
                <G>
                    <Path fill={"#788B9C"} d="M33.5,23c3.033,0,5.5,2.467,5.5,5.5S36.533,34,33.5,34h-6c-3.033,0-5.5-2.467-5.5-5.5    s2.467-5.5,5.5-5.5H33.5 M33.5,22h-6c-3.575,0-6.5,2.925-6.5,6.5s2.925,6.5,6.5,6.5h6c3.575,0,6.5-2.925,6.5-6.5    S37.075,22,33.5,22L33.5,22z"/>
                </G>
            </G>
            <G>
                <Circle fill={"#E1EBF2"} cx="33.5" cy="28.5" r="3"/>
                <G>
                    <Path fill={"#788B9C"} d="M33.5,26c1.378,0,2.5,1.121,2.5,2.5S34.878,31,33.5,31S31,29.879,31,28.5S32.122,26,33.5,26     M33.5,25c-1.925,0-3.5,1.575-3.5,3.5s1.575,3.5,3.5,3.5s3.5-1.575,3.5-3.5S35.425,25,33.5,25L33.5,25z"/>
                </G>
            </G>
            <G>
                <Path fill={"#BAE0BD"} d="M33.5,26L33.5,26c1.375,0,2.5,1.125,2.5,2.5v0c0,1.375-1.125,2.5-2.5,2.5h0   c-1.375,0-2.5-1.125-2.5-2.5v0C31,27.125,32.125,26,33.5,26z"/>
            </G>
            <G>
                <Path fill={"#E1EBF2"} d="M7.5,35.5c-3.86,0-7-3.141-7-7s3.14-7,7-7h10c3.86,0,7,3.141,7,7s-3.14,7-7,7H7.5z"/>
                <G>
                    <Path fill={"#788B9C"} d="M17.5,22c3.584,0,6.5,2.916,6.5,6.5S21.084,35,17.5,35h-10C3.916,35,1,32.084,1,28.5    S3.916,22,7.5,22H17.5 M17.5,21h-10C3.375,21,0,24.375,0,28.5S3.375,36,7.5,36h10c4.125,0,7.5-3.375,7.5-7.5S21.625,21,17.5,21    L17.5,21z"/>
                </G>
            </G>
            <G>
                <Rect x="8.5" y="21.5" fill={fill || "#F78F8F"} width="20" height="14"/>
                <Path fill={fill} d="M28,22v13H9V22H28 M29,21H8v15h21V21L29,21z"/>
            </G>
            <G>
                <Rect x="8.5" y="4.5" fill={fill || "#F78F8F"} width="20" height="14"/>
                <Path fill={fill} d="M28,5v13H9V5H28 M29,4H8v15h21V4L29,4z"/>
            </G>
            <G>
                <Path fill={"#66798F"} d="M7.5,31.5c-1.654,0-3-1.346-3-3s1.346-3,3-3h6c1.654,0,3,1.346,3,3s-1.346,3-3,3H7.5z"/>
                <Path fill={"#36404D"} d="M13.5,26c1.378,0,2.5,1.121,2.5,2.5S14.878,31,13.5,31h-6C6.122,31,5,29.879,5,28.5S6.122,26,7.5,26   H13.5 M13.5,25h-6C5.575,25,4,26.575,4,28.5S5.575,32,7.5,32h6c1.933,0,3.5-1.567,3.5-3.5S15.433,25,13.5,25L13.5,25z"/>
            </G>
            <G>
                <Rect x="11.5" y="8.5" fill={"#66798F"} width="4" height="6"/>
                <Path fill={"#36404D"} d="M15,9v5h-3V9H15 M16,8h-5v7h5V8L16,8z"/>
            </G>
            <G>
                <Rect x="13.5" y="7.5" fill={"#C2E8FF"} width="12" height="8"/>
                <Path fill={"#788B9C"} d="M25,8v7H14V8H25 M26,7H13v9h13V7L26,7z"/>
            </G>
            <Rect x="7" y="27" fill={"#FFFFFF"} width="1" height="3"/>
            <Rect x="7" y="27" transform="matrix(4.638429e-011 -1 1 4.638429e-011 -21 36)" fill={"#FFFFFF"} width="1" height="3"/>
            <G>
                <Rect x="13.5" y="24.5" fill={"#C2E8FF"} width="12" height="8"/>
                <Path fill={"#788B9C"} d="M25,25v7H14v-7H25 M26,24H13v9h13V24L26,24z"/>
            </G>
            <Path fill={"#BAE0BD"} d="M0.026,29H2v-1H0.026C0.014,28.166,0,28.331,0,28.5S0.014,28.834,0.026,29z"/>
        </Svg>
    )

}


export default IconPokedex