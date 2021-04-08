import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class PokeService {
    async getAllPoke() {
        let res = await pokeApi.get()
        ProxyState.pokemon = res.data.results.map(p => new Pokemon(p))
    }

    async getPoke(p) {
        let res = await pokeApi.get(p)
        console.log(res)
        ProxyState.selected = new Pokemon(res)
    }
}

export const pokeService = new PokeService();