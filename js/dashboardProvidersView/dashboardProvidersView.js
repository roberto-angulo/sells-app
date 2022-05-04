export const dashboardProvidersView = () => {
    const providersSection = document.getElementById('providerList');
    const providersList = localStorage.getItem('providerData')
        ? JSON.parse(localStorage.getItem('providerData'))
        : null;
    
    if(!providersList) {
        const elementToPrintError = document.createElement('div');
        elementToPrintError.innerHTML = '<p>No hay provedores registrados</p>'; 
        providersSection.appendChild(elementToPrintError);
        return;
    }

    // console.log('providersList', providersList);

    let providersMarkup = '';
    providersList.forEach((currentProvider) => {
        providersMarkup =
            `${providersMarkup}
                <tr>
                    <td>${currentProvider.providerName}</td>
                    <td>${currentProvider.providerNit}</td>
                    <td>${currentProvider.providerCity}</td>
                    <td>${currentProvider.providerAddress}</td>
                </tr>`;
    });

    console.log('providersSection', providersSection);

    providersSection.innerHTML = `<table class="providers-table">${providersMarkup}</table>`;
}