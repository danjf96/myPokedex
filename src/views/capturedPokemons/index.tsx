import React from 'react'
import { SafeAreaView } from 'react-native'
import Container from '../../components/layouts/Container'
import Header from '../../components/header'
import { ThemeApp } from '../../assets/Theme'

const CapturedPokemons = () => {
    return (
        <SafeAreaView style={{ backgroundColor: ThemeApp(false).colors.background, height:'100%' }}>
            <Container >  
                <Header title='Captured Pokemons' />
            </Container>
        </SafeAreaView>
        
    )
}

export default CapturedPokemons