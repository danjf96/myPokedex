import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import useHomeViewModel from '../../viewModels/home/homeViewModel'
import Container from '../../components/layouts/Container'
import PokeCard from '../../components/pokeCard'
import { URL_IMG_POKEMON } from '../../constants'
import Loading from '../../components/layouts/Loading'
import Header from '../../components/header'
import { ThemeApp } from '../../assets/Theme'
import FormHeader from '../../components/FormHeader'

const Home = () => {
    const { seeDetails, capturePokemon, pagination, isLoading, changeSearchValue, filter, verifyIfIsSave, pokeList } = useHomeViewModel()
    return (
        <SafeAreaView style={{ backgroundColor: ThemeApp(false).colors.background, height:'100%' }}>
            <Container >  
                <Header>
                    <FormHeader onSubmit={filter} changeValue={changeSearchValue} />
                </Header>
             
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
                    data={pokeList}
                    onEndReached={pagination}
                    onEndReachedThreshold={0.5}
                />
                <Loading visible={isLoading} />
            </Container>
        </SafeAreaView>
        
    )
}

export default Home