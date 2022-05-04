import { addSupply } from './supplies/supplies.js';
import { cleanFields, setlocalStorageKey } from './utilities.js';
import { toggleView } from './toggleView/toggleView.js';
import { dashboardProvidersView } from './dashboardProvidersView/dashboardProvidersView.js'


const saveProviderData = () => {
    const providerSubmit = document.getElementById('providerSubmit');

    providerSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        const providerName = document.getElementById('providerCompanyName')?.value.trim();
        const providerCity = document.getElementById('providerCity')?.value.trim();
        const providerNit = document.getElementById('providerNit')?.value.trim();
        const providerAddress = document.getElementById('providerAddress')?.value.trim();
        const errorsBox = document.getElementById('providerDataErrors');
        const emptyFields = [
            {
                name: 'Company Name',
                value: providerName
            },
            {
                name: 'NIT',
                value: providerNit
            },
            {
                name: 'Address',
                value: providerAddress
            },
            {
                name: 'City',
                value: providerCity
            }].filter((currentField) => {

            return !currentField.value;
        });
    
        if(emptyFields.length) {
                let emptyError = '<ul>';
                
                emptyFields.forEach((currentField) => {
                    emptyError = `${emptyError}<li>${currentField.name}</li>`;
                });

                emptyError = `${emptyError}</ul>`;
                emptyError = `<div>The follow fields are empty: ${emptyError}. Please fill them</div>`;
                errorsBox.innerHTML = emptyError;
                return;
        }

        const cleanProviderInputFields = () => cleanFields('#providersForm input');
        
        setlocalStorageKey(
            'providerData',
            {
                providerName,
                providerCity,
                providerNit,
                providerAddress
            },
            cleanProviderInputFields
        );

        /* if(!wasSuccessFullyUpdated) {
            errorsBox.innerHTML = 'Something wrong happened, please check data entered.';
            return;
        } */

        cleanProviderInputFields();
    });
}

const main = () => {
    saveProviderData();
    addSupply();
    toggleView();
    dashboardProvidersView();
};

document.addEventListener('DOMContentLoaded', main);
