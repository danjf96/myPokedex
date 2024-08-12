import React from 'react'
import { FlatList, Text } from 'react-native'
import useHomeViewModel from '../../viewModels/home/homeViewModel'
import Container from '../../components/layouts/Container'
import PokeCard from '../../components/pokeCard'
import { URL_IMG_POKEMON } from '../../contants'

const Home = () => {
    const { getList, pokeList } = useHomeViewModel()
    return (
        <Container>
            <Text>Home</Text>
            <FlatList 
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                renderItem={ ({ item, index }) => <PokeCard img={{ uri: `${URL_IMG_POKEMON}${index+1}.png`}} name={item.name} url={item.url} number={index+1} captureAction={() => null} captured={false} />
                }
                data={pokeList}
                
            />
        </Container>
    )
}

export default Home