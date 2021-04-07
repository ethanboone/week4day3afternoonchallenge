import { ProxyState } from "../AppState.js"

export default class Pokemon {
    constructor({ name, url, }) {
        this.name = name
        this.url = url
    }
    get Template() {
        return `<button onclick="app.pokeController.getPoke('${this.url}')" class="btn"><p>${this.name}</p></button>`
    }

    get SelectedTemplate() {
        return `
        <div class="col-4"
            <div class="card">
                <img src="" width="100%">
                <h1>${this.name}</h1>
                <button class="btn">Add/Remove</button>
            </div>
        </div>
        `
    }

    // get Index() {
    //     return ProxyState.pokemon.findIndex(pokemon => pokemon.name == this.name) + 1
    // }
}