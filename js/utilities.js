export const setlocalStorageKey = (key, data, callback = null) => {
    let wasSuccessFullyUpdated = false;
    const dataStorage = localStorage.getItem(key)
            ? JSON.parse(localStorage.getItem(key))
            : null;

    if(!dataStorage) {
        localStorage.setItem(key, JSON.stringify([data]));
        if(callback) {
            callback();
        }
        wasSuccessFullyUpdated = true;
        return wasSuccessFullyUpdated;
    }

    if(dataStorage.includes(data)) {
        return wasSuccessFullyUpdated;
    }

    localStorage.setItem(
        key,
        JSON.stringify(
            [...dataStorage, data])
    );

    wasSuccessFullyUpdated = true;
    return wasSuccessFullyUpdated;
}

export const cleanFields = (selector) => {
    document.querySelectorAll(selector).forEach((currentField) => {
        currentField.value = '';
    });
}

export const toggleHideClass = (elementSelector) => {
    const dashboardRegister = document.getElementById(elementSelector);
    dashboardRegister.classList.toggle('hide');
}