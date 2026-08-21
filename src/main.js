import page from "page"
import { Header, Main, Footer } from "./components"
import { setLang } from "./i18n"
import { initRouter } from "./router"
import './style.scss'
import { switchLanguages } from "./i18n/switchLanguages"

const app = document.getElementById("app")

export function render(page) { 
  app.innerHTML = `
  ${Header()}
  ${Main(page)}
  ${Footer()}
  `
  switchLanguages(page);
}

initRouter(render)
