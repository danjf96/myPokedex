import React from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import useHomeViewModel from '../../viewModels/home/homeViewModel'
import Container from '../../components/layouts/Container'
import PokeCard from '../../components/pokeCard'
import Loading from '../../components/layouts/Loading'
import Header from '../../components/header'
import { ThemeApp } from '../../assets/Theme'

const CapturedPokemons = () => {
    const { seeDetails, capturePokemon, isLoading, verifyIfIsSave, myPokeList} = useHomeViewModel()
    return (
        <SafeAreaView style={{ backgroundColor: ThemeApp(false).colors.background, height:'100%' }}>
            <Container >  
                <Header title='Captured Pokemons' />
                {myPokeList.length === 0 && <Text style={{ margin: 10 }}>Nenhum pokemon capturado!</Text>}
                <FlatList 
                    style={{ flex: 1, height: '100%' }}
                    showsVerticalScrollIndicator={false}
                    renderItem={ ({ item, index }) => <PokeCard 
                            img={{ uri: item.img}} 
                            name={item.name} 
                            url={item.url} 
                            number={item?.number || 0} 
                            captureAction={capturePokemon} 
                            captured={verifyIfIsSave(item.name)}
                            onPress={seeDetails}
                        />
                    }
                    data={myPokeList}
                />

                
                <Loading visible={isLoading} />
            </Container>
        </SafeAreaView>
        
    )
}

export default CapturedPokemons