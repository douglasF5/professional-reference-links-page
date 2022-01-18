import { getContent, currentLang, changeLang, setLang } from "./content.js";
import { setPrimarySection } from "./primary-section.js";
import { setSecondarySection, clearCards } from "./secondary-section.js";

const languageSelector = document.querySelector('.footer__language-selector');
const language = document.querySelector('.footer__language-switcher').childNodes[0];
const languagesList = document.querySelector('.footer__languages-list');
const englishLang = document.getElementById('englishLang');
const englishLangWrapper = document.getElementById('englishLang').closest('li');
const portugueseLang = document.getElementById('portugueseLang');
const portugueseLangWrapper = document.getElementById('portugueseLang').closest('li');
const footerInfo = document.querySelector('.footer__copyright');

// RENDER CHECK MARK FOR THE SELECTED LANGUAGE
const renderCheck = (element) => {
    const check = document.createElement('div');
    check.innerHTML = checkInnerHTML();
    element.appendChild(check);
};

const checkInnerHTML = () => {
    return '<svg class="footer__language-check-icon"><use xlink:href="./assets/icons.svg#check-icon" /></svg>';
};

// CLEAR CHECK
const removeCheck = () => {
    const check = document.querySelector('.footer__language-check-icon');
    check.remove();
};

// SELECT LANGUAGE ELEMENT
const selectLangElment = () => {
    if(currentLang === 'en') {
        return englishLang;
    } else {
        return portugueseLang;
    }
};

// SET UP FOOTER
const setFooter = () => {
    language.textContent = getContent('languages');
    renderCheck(selectLangElment());

    languageSelector.onclick = () => {
        languagesList.toggleAttribute('data-open');
    }

    englishLangWrapper.onclick = () => {
        removeCheck();
        renderCheck(englishLang);
        language.textContent = 'English';
        changeLang('en');
        setPrimarySection();
        clearCards();
        setSecondarySection();
        languageSelector.removeAttribute('open');
    };

    portugueseLangWrapper.onclick = () => {
        removeCheck();
        renderCheck(portugueseLang);
        language.textContent = 'Português';
        changeLang('pt');
        setPrimarySection();
        clearCards();
        setSecondarySection();
        languageSelector.removeAttribute('open');
    };
    
    window.addEventListener('beforeunload', () => {
        setLang(currentLang);
    });

    footerInfo.innerHTML = '© 2020 — ' + new Date().getFullYear();
};

export { setFooter };