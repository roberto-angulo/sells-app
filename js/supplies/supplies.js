import { cleanFields, setlocalStorageKey } from '../utilities.js';

export const addSupply = () => {
    const suppliesSubmitButton = document.getElementById('suppliesSubmit');
    const errorsBox = document.getElementById('suppliesDataErrors');

    suppliesSubmitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const supplyInput = document.getElementById('supplesItem');
        const supplyItemValue = supplyInput.value.trim().toLowerCase();

        const wasSuccessFullyUpdated = setlocalStorageKey(
            'supplies',
            supplyItemValue,
            () => cleanFields('#supplesItem')
        );

        if(!wasSuccessFullyUpdated) {
            errorsBox.innerHTML = 'Something wrong happened, please check data entered.';
        }
    });
}