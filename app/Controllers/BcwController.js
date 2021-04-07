import { ProxyState } from "../AppState.js";
import { bcwService } from "../Services/BcwService.js";

function _draw() {
    let mine = document.getElementById('mine')
    let template = ''
    ProxyState.myPokemon.forEach(p => template += p.Template)
    mine.innerHTML = template
}

export default class PokeController {
    constructor() {
        ProxyState.on("pokemon", _draw)

        //this.getAllPoke()
    }

    async getAllPoke() {
        try {
            await bcwService.getAllPoke()
        } catch (error) {
            console.log(error)
        }
    }
}