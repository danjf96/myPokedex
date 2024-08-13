import React, { useEffect } from 'react'
import { Dimensions, Image, View } from 'react-native'
import useAppDispatch from '../../hooks/store/useAppDispatch';
import { setMyList } from '../../store/pokedex/reducer';
import { useNavigation } from '@react-navigation/native';
import { getDataStorage } from '../../hooks/storage';
const PokedexImg = require('../../assets/imgs/pokedex.png');
const { width } = Dimensions.get('window')

const Splash: React.FC = () => {
    const dispatch = useAppDispatch();
    const nav = useNavigation();

    useEffect( () => {
        getDataStorage('MY_LIST').then( (data) => {
            if(data?.length > 0)
                dispatch(setMyList({ list: data, type: 'ADD' }));
        })
        setTimeout( () => nav.navigate('BottomTabs'  as never), 500)
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={PokedexImg} style={{ width: '80%', resizeMode: 'contain'}} />
        </View>
    )
}

export default Splash