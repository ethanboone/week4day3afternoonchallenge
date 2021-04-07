import { ProxyState } from "../AppState.js";
import { pokeService } from "../Services/PokeService.js";

function _draw() {

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