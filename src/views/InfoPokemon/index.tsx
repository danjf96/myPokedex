import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { ThemeApp } from '../../assets/Theme'
import Header from '../../components/header'
import { useNavigation } from '@react-navigation/native'

const InfoPokemon: React.FC = (props) => {
    const nav = useNavigation()
    return (
        <SafeAreaView style={{ backgroundColor: ThemeApp(false).colors.background, height:'100%' }}>
            <Header 
                title=''
                iconLeft={<Text style={{ color: 'black'}}>Back</Text>} 
                onPressLeft={() => nav.goBack()}
            />
            <Text>DETALHES</Text>
        </SafeAreaView>
        
    )
}

export default InfoPokemon