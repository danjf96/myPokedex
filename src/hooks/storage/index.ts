import AsyncStorage from '@react-native-async-storage/async-storage';
import { NAME_SAVE_PROJECT_STORAGE } from '../../constants';

const setDataStorage = (key: 'MY_LIST' | 'POKEMON', value: LISTPOKES[] | any ) => new Promise( async (resolve, reject) => {
    try {
        await AsyncStorage.setItem(`${NAME_SAVE_PROJECT_STORAGE}${key}`, JSON.stringify(value))
        resolve(true)
    } catch (e) {
        console.log('ERROR', e)
        reject(false)
    }
})

const getDataStorage = (key:string) => new Promise( async (resolve, reject) => {
    try {
        let value = await AsyncStorage.getItem(`${NAME_SAVE_PROJECT_STORAGE}_${key}`)
        value = value != null ? JSON.parse(value) : {};
        resolve(value)
    } catch (e) {
        console.log('ERROR', e)
        reject({})
    }
})

const removeDataStorage = (key:string) => new Promise( async (resolve, reject) => {
    try {
        await AsyncStorage.removeItem(`${NAME_SAVE_PROJECT_STORAGE}_${key}`)
        resolve(true)
    } catch (e) {
        console.log('ERROR', e)
        reject(false)
    }
})



export { setDataStorage, getDataStorage, removeDataStorage }