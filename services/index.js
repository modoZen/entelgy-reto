const API = 'https://restcountries.eu/rest/v2/lang/es';

const getData = async (id='') =>{
    const apiUrl = id!=''?`${API}${id}` : API;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data
    } catch (e) {
        console.log('Fetch Error', error);
    }
}