import { ProxyState } from "../AppState.js";
import { pokeService } from "../Services/PokeService.js";

function _draw() {
    let all = document.getElementById('all')
    let template = ''
    ProxyState.pokemon.forEach(p => template += p.Template)
    all.innerHTML = template
}

function _drawSelected() {
    let select = document.getElementById('select')
    let template = ''
    template = ProxyState.selected.SelectedTemplate
    select.innerHTML = template
}

export default class PokeController {
    constructor() {
        ProxyState.on('pokemon', _draw)
        ProxyState.on('selected', _drawSelected)

        this.getAllPoke()
    }

    async getAllPoke() {
        try {
            await pokeService.getAllPoke()
        } catch (error) {
            console.log(error)
        }
    }

    async getPoke(index) {
        try {
            await pokeService.getPoke(index)
        } catch (error) {
            console.log(error)
        }
    }

    // async addPoke(pokemon) {
    //     try {
    //         await 
    //     }
    // }
}