
// RENDER LINK CARDS
const actionLinksInfo = [
    {
        title: 'Design work showcase',
        details: 'dribbble.com/douglas_',
        url: 'https://dribbble.com/douglas_',
    },
    {
        title: 'Code I’ve been writing',
        details: 'github.com/douglasf5',
        url: 'https://github.com/douglasF5?tab=repositories',
    },
    {
        title: 'Career and education info',
        details: 'linkedin.com/douglasfs',
        url: 'https://www.linkedin.com/in/douglasfs/',
    },
];

const actionsList = document.querySelector('.actions-list');

const renderOneCard = (data) => {
    const cardContainer = document.createElement('a');
    cardContainer.classList.add('action-link');
    cardContainer.href = data.url;
    cardContainer.setAttribute('target', '_blank');
    cardContainer.innerHTML = cardInnerHTML(data);
    actionsList.prepend(cardContainer);
};

const cardInnerHTML = (data) => {
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
        renderOneCard(card);
    });
}

renderLinkCards(actionLinksInfo);

// SET UP COPY TO CLIPBOARD
const copyEmailButton = document.getElementById('copyEmailButton');
const cardDetails = document.getElementById('cardCopyDetails');
let msg = 'Email copied!';
const textToBeCopied = 'dfaferreira46@gmail.com'

const copyToClipboardAsync = str => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(str);
    } else {
        msg = "Couldn't copy the email";
        return Promise.reject('The Clipboard API is not available.');
    }
};

copyEmailButton.onclick = () => {
    copyToClipboardAsync(textToBeCopied);
    cardDetails.innerText = msg;
    cardDetails.setAttribute('data-highlight', '');

    setTimeout(() => {
        cardDetails.removeAttribute('data-highlight', '');
        cardDetails.innerText = 'Get in touch · Click to copy';
    }, 2000);
};