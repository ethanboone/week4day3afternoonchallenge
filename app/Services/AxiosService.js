export const pokeApi = axios.create({
    baseURL: "https://github.com/ethanboone/ethanboone",
    timeout: 3000
})

export const bcwApi = axios.create({
    baseURL: "http://bcw-sandbox.herokuapp.com/api",
    timeout: 3000
})