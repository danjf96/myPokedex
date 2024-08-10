import axios from 'axios'

//DEV
const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

var api = axios.create({
    baseURL,
    timeout: 60000,
    headers: {
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
    }
});

export default api