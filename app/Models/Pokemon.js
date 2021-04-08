import { ProxyState } from "../AppState.js"

export default class Pokemon {
    constructor({ name, url, sprites }) {
        this.name = name
        this.url = url
        this.img = img || sprites.front_default
    }
    get Template() {
        return `<button onclick="app.pokeController.getPoke('${this.url}')" class="btn btn-outline-primary my-2"><p>${this.name}</p></button>`
    }

    get SelectedTemplate() {
        return `
        <div class="col-4"
            <div class="card">
                <img src="${this.img}" width="100%">
                <h1>${this.name}</h1>
                <button class="btn btn-outline-primary">Add/Remove</button>
            </div>
        </div>
        `
    }
}