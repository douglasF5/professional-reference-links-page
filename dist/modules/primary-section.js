import { getContent } from './language.js';

// SET UP WORK AVAILABILITY
const workStatus = (workAvailability) => {
    const nameWrapper = document.querySelector('.primary-section__name-wrapper');

    if(workAvailability === 'Open to work'){
        const workStatus = document.createElement('span');
        workStatus.classList.add('primary-section__work-status');
        workStatus.innerText = '· Open to work';
        nameWrapper.appendChild(workStatus);
    }
};

// SET UP PRIMARY SECTION
const setPrimarySection = (workAvailability) => {
    const statement = document.querySelector('.primary-section__statement');
    statement.innerText = getContent('statement');
    workStatus(workAvailability);
};

export { setPrimarySection };