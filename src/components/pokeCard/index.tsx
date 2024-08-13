import React from 'react'
import { POKECARDPROPS } from './types'
import { PokeBtn, PokecardContainer, PokecardContainerText, PokeImage, PokeName, PokeNumber } from './styles'
import IconSimplePokebola from '../../assets/icons/IconSimplePokebola'
const PokedexImg = require('../../assets/imgs/pokedex.png');

const PokeCard: React.FC<POKECARDPROPS> = (props) => {

    return (
        <PokecardContainer testID="poke-card">
            <PokeBtn onPress={() => props?.onPress(props.url)} testID='pokecard-card-btn'>
                <PokeImage source={props?.img}  defaultSource={PokedexImg} testID='pokecard-img'/>
                <PokecardContainerText>
                    <PokeName>{props?.name}</PokeName>
                    <PokeNumber>#{props?.number?.toString()?.padStart(3,'0')}</PokeNumber>
                </PokecardContainerText>
            </PokeBtn>
            <PokeBtn style={{ width: 'auto', marginRight: 10}} onPress={() => props?.captureAction({ url: props?.url, name: props?.name })} testID='pokecard-btn-capture'>
                <IconSimplePokebola fill={props?.captured ? undefined : 'gray'} fillShadow={props?.captured ? undefined : 'gray'}  />
            </PokeBtn>
        </PokecardContainer>
    )
    
}

export default PokeCard