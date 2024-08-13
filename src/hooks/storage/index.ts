import AsyncStorage from '@react-native-async-storage/async-storage';
import { NAME_SAVE_PROJECT_STORAGE } from '../../constants';

type KEYS_STORAGE  = 'MY_LIST' | 'POKEMON'
const setDataStorage = (key: KEYS_STORAGE, value: LISTPOKES[] | any ) => new Promise( async (resolve, reject) => {
    try {
        await AsyncStorage.setItem(`${NAME_SAVE_PROJECT_STORAGE}${key}`, JSON.stringify(value))
        resolve(true)
    } catch (e) {
        console.log('ERROR', e)
        reject(false)
    }
})

const getDataStorage = (key: KEYS_STORAGE) => new Promise<LISTPOKES[] | any>( async (resolve, reject) => {
    try {
        let value = await AsyncStorage.getItem(`${NAME_SAVE_PROJECT_STORAGE}${key}`)
        value = value != null ? JSON.parse(value) : null;
        resolve(value)
    } catch (e) {
        console.log('ERROR', e)
        reject(null)
    }
})

const removeDataStorage = (key: KEYS_STORAGE) => new Promise( async (resolve, reject) => {
    try {
        await AsyncStorage.removeItem(`${NAME_SAVE_PROJECT_STORAGE}${key}`)
        resolve(true)
    } catch (e) {
        console.log('ERROR', e)
        reject(false)
    }
})



export { setDataStorage, getDataStorage, removeDataStorage }