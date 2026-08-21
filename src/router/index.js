import page from "page";
import { Home, LessonBuilder, MyLessons, AboutUs, Page404 } from "@/pages";

export function initRouter(render) { 
    page('/', () => render(Home) )
    page('/lessonBuilder', () => render(LessonBuilder) )
    page('/myLessons', () => render(MyLessons) )
    page('/about', () => render(AboutUs))
    page('*', () => render(Page404))
    
    page()
}