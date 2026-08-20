import page from "page";
import { Home, Products, AboutUs, Page404 } from "@/pages";

export function initRouter(render) { 
    page('/', () => render(Home) )
    page('/products', () => render(Products) )
    page('/about', () => render(AboutUs))
    page('*', () => render(Page404))
    
    page()
}