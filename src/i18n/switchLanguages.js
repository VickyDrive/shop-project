import { setLang } from "./index";
import { render} from '@/main'

export function switchLanguages(page) {
  const div = document.getElementById("Languages");

  div.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-lang]");
    if (!btn) return;
    const lang = btn.dataset.lang;
    setLang(lang);
    render(page);
  });
}