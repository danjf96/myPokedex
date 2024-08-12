import React from 'react'
import { Text } from 'react-native'
import useHomeViewModel from '../../viewModels/home/homeViewModel'
import Container from '../../components/layouts/Container'

const Home = () => {
    const { getList, pokeList } = useHomeViewModel()

    return (
        <Container>
            <Text>Home</Text>

        </Container>
    )
}

export default Home