export default class Pokemon {
    constructor({ name, url }) {
        this.name = name
        this.url = url
    }
    get Template() {
        return `<button class="btn"><p>${this.name}</p></button>`
    }
}