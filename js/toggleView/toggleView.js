import { toggleHideClass } from '../utilities.js';

const toggleSections = () => {
    toggleHideClass('dashboardRegister');
    toggleHideClass('dashboardView');
}

export const toggleView = () => {
    const registerButton = document.getElementById('registerButton');
    const dashboardButton = document.getElementById('dashboardButton');

    registerButton.addEventListener('click', () => {
        toggleSections();
    });

    dashboardButton.addEventListener('click', () => {
        toggleSections();
    });
}