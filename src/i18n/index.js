import en from "./en.json"
import ru from "./ru.json"
import cs from "./cs.json"


const translations = {
    en,
    ru,
    cs
}

const DEFAULT_LANG = 'ru';
const LS_KEY = "lang"

export function setLang(lang) { 
    localStorage.setItem(LS_KEY, lang);
}

export function getLang() { 
    return localStorage.getItem(LS_KEY) || DEFAULT_LANG
}


export function t(key) {
    const lang = getLang()
    return translations[lang]?.[key] || translations[DEFAULT_LANG][key] || key;
}