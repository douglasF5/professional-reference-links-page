// SET UP LANGUAGE
const getLang = () => {
    return localStorage.getItem('lang') || 'en';
};

const lang = getLang();
let currentLang = lang;

const changeLang = (lang) => {
    currentLang = lang;
};

const setLang = (lang) => {
    return localStorage.setItem('lang', lang);
};

// CONTENT
const content = {
    statement: {
        en: "Front end developer and UI designer — plus other 99 things more I've been uncovering.",
        pt: 'Desenvolvedor front end e UI designer — e mais outras 99 coisas que venho descobrindo.',
    },
    sectionTitle: {
        en: 'Find out more',
        pt: 'Saiba mais',
    },
    linkToLinkedIn: {
        en: 'Career and education info',
        pt: 'Informações profissionais',
    },
    linkToGithub: {
        en: "Code I've been writing",
        pt: 'Código que tenho escrito',
    },
    linkToDribbble: {
        en: 'Design work showcase',
        pt: 'Trabalhos de UI design',
    },
    emailButton: {
        en: 'Get in touch · Click to copy',
        pt: 'Clique para copiar o email',
    },
    languages: {
        en: 'English',
        pt: 'Português',
    },
};

const getContent = (element) => {
    return content[element][currentLang];
}

export { getContent, currentLang, changeLang, setLang };