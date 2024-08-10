import React from 'react'
import { Text } from 'react-native'
import useAppSelector from '../../hooks/store/useAppSelector'

const Home = () => {
    const store = useAppSelector( ({ pokedex }) => pokedex)

    return (
        <>
            <Text>Home</Text>
        </>
    )
}

export default Home