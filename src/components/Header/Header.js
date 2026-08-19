import logo from '@/assets/icons/logo.svg'
import { getlang, t } from '@i18n'

export function Header(){
    const lang = getlang()
    return /*html*/`
    <header class ="Header">
        <div class = "Logo">
            <a href="/">
                <img src="${logo}" alt=""/>
            </a>
        </div>
    <nav>
        <a href="/">${ t("nav.home")}</a>
        <a href="/about">${t("nav.about")}</a>
        <a href="/products">${t("nav.products")}</a>
    </nav>
    <div id="Languages" class ="Languages_list">
        <button data-lang="ru" class ="Lang_btn" ${lang === 'ru' ? 'Active_lang':''}>RU</button>
        <button data-lang="en" class ="Lang_btn" ${lang === 'en' ? 'Active_lang': ''}>EN</button>
    </div>
    </header>
    `;
}

