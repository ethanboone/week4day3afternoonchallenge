import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { bcwApi } from "./AxiosService.js"

class BcwService {
    async getAllPoke() {
        let res = await bcwApi.get('')
        console.log(res)
    }
}

export const bcwService = new BcwService()