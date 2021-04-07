import PokeController from "./Controllers/PokeController.js"
import BcwController from "./Controllers/BcwController.js"

class App {
  pokeController = new PokeController()
  bcwController = new BcwController()
}

window["app"] = new App()
