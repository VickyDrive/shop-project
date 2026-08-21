import { t } from "@/i18n"
import { Hero } from "@/components/Hero";

export function Home() { 
    return /*html*/ `
    ${Hero()}
    <section class="Home_section1">${t("home.title1")}</section>
    <section class="Home_section2">${t("home.title2")}</section>
    `;
}