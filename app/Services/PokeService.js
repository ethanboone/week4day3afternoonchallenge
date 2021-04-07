import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class PokeService {
    async getAllPoke() {
        let res = await pokeApi.get()
        console.log(res.data.results)
        ProxyState.pokemon = res.data.results.map(p => new Pokemon(p))
        console.log(ProxyState.pokemon)
    }

    addPoke() {
        ProxyState.Pokemon = [...ProxyState.Pokemon, new Pokemon({ title: Math.random() })]
    }
}

export const pokeService = new PokeService();