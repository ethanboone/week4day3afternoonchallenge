export const pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
    timeout: 3000
})

export const bcwApi = axios.create({
    baseURL: "http://bcw-sandbox.herokuapp.com/api",
    timeout: 3000
})