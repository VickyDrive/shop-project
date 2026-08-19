import {t} from "@/i18n";

export function Hero(){
    return/*html*/`
    <section class = "Hero">
        <h1 class ="Hero_title">${t('hero.title')}</h1>
        <p class = "Hero_text">${t('hero.text')}</p>
    </section>
    `;
}