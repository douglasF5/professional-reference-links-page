import { getContent } from "./language.js";

const setFooter = () => {
    const language = document.querySelector('.footer__language-switcher').childNodes;
    language[0].textContent = getContent('languages');
};

export { setFooter };