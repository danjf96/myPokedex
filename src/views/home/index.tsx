import React from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import useHomeViewModel from '../../viewModels/home/homeViewModel'
import Container from '../../components/layouts/Container'
import PokeCard from '../../components/pokeCard'
import { URL_IMG_POKEMON } from '../../contants'
import Loading from '../../components/layouts/Loading'
import Header from '../../components/header'

const Home = () => {
    const { pokeList, seeDetails, capturePokemon, pagination, isLoading } = useHomeViewModel()
    return (
        <>
            <Header />
            <Container>
            
                <FlatList 
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    renderItem={ ({ item, index }) => <PokeCard 
                            img={{ uri: `${URL_IMG_POKEMON}${index+1}.png`}} 
                            name={item.name} 
                            url={item.url} 
                            number={index+1} 
                            captureAction={capturePokemon} 
                            captured={false}
                            onPress={seeDetails}
                        />
                    }
                    data={pokeList}
                    onEndReached={pagination}
                    onEndReachedThreshold={0.5}
                />
                <Loading visible={isLoading} />
            </Container>
        </>
        
    )
}

export default Home