const API = 'https://restcountries.eu/rest/v2/lang/es';

const getData = async (id='') =>{
    const apiUrl = id!=''?`${API}${id}` : API;
    try {
        const data = await fetch(apiUrl);
        return data
    } catch (e) {
        console.log('Fetch Error', error);
    }
}

export default {
    getData
};