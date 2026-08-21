import logo from '@/assets/icons/book.png'
import ava from '@/assets/icons/img.webp'
import heart from '@/assets/icons/heart.png'
import { getLang, t } from '@/i18n'

export function Header() {
    const lang = getLang()
    
    return /*html*/ `
    <header class="Header">
        <div class="Logo">
            <a href="/">
                <img src="${logo}" alt="" />
            </a>
        </div>
        <nav>
            <a href="/">${t("nav.home")}</a>
            <a href="/lessonBuilder">${t("nav.lessonBuilder")}</a>
            <a href="/myLessons">${t("nav.myLessons")}</a>
            <a href="/about">${t("nav.about")}</a>
        </nav>
        <div id="Languages" class="Languages_list">
            <button data-lang="ru" class="Lang_btn ${lang === "ru" ? "Active_lang" : ""}">RU</button>
            <button data-lang="en" class="Lang_btn ${lang === "en" ? "Active_lang" : ""}">EN</button>
            <button data-lang="cs" class="Lang_btn ${lang === "cs" ? "Active_lang" : ""}">CZ</button>
            <button data-lang="it" class="Lang_btn ${lang === "it" ? "Active_lang" : ""}">IT</button>
        </div>
        <div class="heart">
            <a href="/">
                <img src="${heart}" alt="" />
            </a>
        </div>
        <div class="avatar">
            <a href="/">
                <img src="${ava}" alt="" />
            </a>
        </div>
    </header>
    `;
}

