import { URL_IMG_POKEMON } from "../constants"

export const mountPokeList = (pokeList: LISTPOKES[]):LISTPOKES[] => {
    const result = pokeList.map( (d,index) =>  {
        const number = d?.url?.replace('https://pokeapi.co/api/v2/pokemon/','')?.replace('/','')
        return { ...d, img: `${URL_IMG_POKEMON}${number}.png`, number: number ? parseInt(number) : 0 }
    })

    return result
}