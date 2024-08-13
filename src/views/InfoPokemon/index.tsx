import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { ThemeApp } from '../../assets/Theme'
import Header from '../../components/header'
import useInfoPokemonViewModel from '../../viewModels/InfoPokemon/infoPokemonViewModel'
import Container from '../../components/layouts/Container'
import { Card, CardType, CardTypeText, Column, HeaderContainerInfo, PokeImg, Row, StatDescription, StatInfo, Title, TitleCard } from './styles'
import { URL_IMG_POKEMON } from '../../constants'
import IconSimplePokebola from '../../assets/icons/IconSimplePokebola'
import IconArrowLeft from '../../assets/icons/IconArrowLeft'

const InfoPokemon: React.FC = () => {
    const { pokemon, navigation, species } = useInfoPokemonViewModel()
    const { name, id, stats, types } = pokemon
    const color = species?.color?.name || ThemeApp(false).colors.text
    const backgroundColor = ThemeApp(false).colors.background

    return (
        <SafeAreaView style={{ backgroundColor, height:'100%' }}>
            <Header 
                styleContainer={{ paddingHorizontal: 12 }}
                title={name}
                styleTitle={{ color }}
                iconLeft={<IconArrowLeft  />} 
                onPressLeft={() => navigation.goBack()}
                icon={(<IconSimplePokebola width={40} height={40} />)}
            />
            <Container enabledScroll={true} padding='0px'>
                <>
                    <HeaderContainerInfo 
                        background={color} 
                        start={{x: 0.0, y: 0.25}} end={{x: 0.15, y: 0.8}}
                        locations={[0,0.2,0.3,0.5,0.7]}
                        colors={[color, 'white', '#f7f7f7', '#e6e6e6', color]}    
                    />
                    <View style={{ position: 'absolute', opacity: 1, alignSelf: 'center', justifyContent:'center' }}>
                        <PokeImg source={{ uri: `${URL_IMG_POKEMON}${id}.png`}}/>
                        <Title color={'white'} style={{ textAlign: 'center'}}>#{(id)?.toString()?.padStart(3, '0')}</Title>
                    </View>
                </>

                <View style={{ width: '100%', padding: 12 }}>
                    <Card color={color}>
                        <>
                            <TitleCard color={color}><Title color={color}>Stats</Title></TitleCard>
                        </>
                        
                        <Column>
                            {stats?.map( (item, index) => <Row style={{ marginBottom: 5 }} key={'stats'+index}>
                                    <StatInfo>{item.stat.name}:</StatInfo>
                                    <StatDescription>{item.base_stat}</StatDescription>
                                </Row>)}
                        </Column>
                    </Card>

                    <Card color={color} >
                        <>
                            <TitleCard color={color}><Title color={color}>Types</Title></TitleCard>
                        </>
                        <Row style={{ flexWrap: 'wrap' }}>
                            {types?.map( (item, index) => <CardType color={color} key={'type'+item.slot}><CardTypeText>{item.type.name}</CardTypeText></CardType>)}
                        </Row>

                    </Card>

                    <Card color={color}>
                        <>
                            <TitleCard color={color}><Title color={color}>Eggs Group</Title></TitleCard>
                        </>
                        <Row style={{ flexWrap: 'wrap' }}>
                            {species?.egg_groups?.map( (item, index) => <CardType color={color} key={'egg'+index}><CardTypeText>{item.name}</CardTypeText></CardType>)}
                        </Row>

                    </Card>
                </View>
                
            </Container>
        </SafeAreaView>
        
    )
}

export default InfoPokemon