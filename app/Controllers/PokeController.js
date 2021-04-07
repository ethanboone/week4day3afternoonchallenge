import { ProxyState } from "../AppState.js";
import { pokeService } from "../Services/PokeService.js";

function _draw() {
    let all = document.getElementById('all')
    let template = ''
    ProxyState.pokemon.forEach(p => template += p.Template)
    all.innerHTML = template
}

export default class PokeController {
    constructor() {
        ProxyState.on("pokemon", _draw)

        this.getAllPoke()
    }

    async getAllPoke() {
        try {
            await pokeService.getAllPoke()
        } catch (error) {
            console.log(error)
        }
    }

}