import { ProxyState } from "../AppState.js";
import { bcwService } from "../Services/BcwService.js";

function _draw() {

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