import { getContent } from './language.js';

const actionsList = document.querySelector('.actions-list');

// RENDER LINK CARDS
const actionLinksInfo = [
    {
        title: getContent('linkToLinkedIn'),
        details: 'linkedin.com/douglasfs',
        url: 'https://www.linkedin.com/in/douglasfs/',
    },
    {
        title: getContent('linkToGithub'),
        details: 'github.com/douglasf5',
        url: 'https://github.com/douglasF5?tab=repositories',
    },
    {
        title: getContent('linkToDribbble'),
        details: 'dribbble.com/douglas_',
        url: 'https://dribbble.com/douglas_',
    },
];

const renderLinkCard = (data) => {
    const cardContainer = document.createElement('a');
    cardContainer.classList.add('action-link');
    cardContainer.href = data.url;
    cardContainer.setAttribute('target', '_blank');
    cardContainer.innerHTML = linkCardInnerHTML(data);
    actionsList.append(cardContainer);
};

const linkCardInnerHTML = (data) => {
    const HTMLtemplate = `
        <svg class="action-link__under-icon arrow-icon"><use xlink:href="../assets/icons.svg#arrow-icon" /></svg>
        <button class="action-link__button">
            <svg class="action-link__top-icon arrow-icon"><use xlink:href="../assets/icons.svg#arrow-icon" /></svg>
            <div class="action-link__content">
                <p class="action-link__primary-content">${data.title}</p>
                <span class="action-link__secondary-content">${data.details}</span>
            </div>
        </button>
    `;

    return HTMLtemplate;
};

const renderLinkCards = (data) => {
    data.forEach(card => {
        renderLinkCard(card);
    });
}

// RENDER COPY CARD
const renderCopyCard = () => {
    const cardContainer = document.createElement('button');
    cardContainer.classList.add('action-link');
    cardContainer.id = 'copyEmailButton';
    cardContainer.innerHTML = copyCardInnerHTML();
    actionsList.append(cardContainer);
};

const copyCardInnerHTML = () => {
    const HTMLtemplate = `
        <svg class="action-link__under-icon copy-icon"><use xlink:href="../assets/icons.svg#copy-icon" /></svg>
        <div class="action-link__button">
            <svg class="action-link__top-icon copy-icon"><use xlink:href="../assets/icons.svg#copy-icon" /></svg>
            <div class="action-link__content">
                <p class="action-link__primary-content">dfaferreira46@gmail.com</p>
                <span id="cardCopyDetails" class="action-link__secondary-content">${getContent('emailButton')}</span>
            </div>
        </div>
    `;

    return HTMLtemplate;
};

// SET UP COPY TO CLIPBOARD
let msg = 'Copied email!';
const textToBeCopied = 'dfaferreira46@gmail.com'

const copyToClipboardAsync = str => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(str);
    } else {
        msg = "Couldn't copy the email";
        return Promise.reject('The Clipboard API is not available.');
    }
};


// SET UP SECONDARY SECTION
const setSecondarySection = () => {
    const sectionTitle = document.querySelector('.secondary-section__title');
    sectionTitle.innerText = getContent('sectionTitle');
    renderLinkCards(actionLinksInfo);
    renderCopyCard();

    const copyEmailButton = document.getElementById('copyEmailButton');
    const cardDetails = document.getElementById('cardCopyDetails');
    copyEmailButton.onclick = () => {
        copyToClipboardAsync(textToBeCopied);
        cardDetails.innerText = msg;
        cardDetails.setAttribute('data-highlight', '');
    
        setTimeout(() => {
            cardDetails.removeAttribute('data-highlight', '');
            cardDetails.innerText = getContent('emailButton');
        }, 2000);
    };
};

export { setSecondarySection };