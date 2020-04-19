import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const covidIndiaURL = 'https://api.covid19india.org/data.json';

export const fetchData = async (country) => {
    let changebleURL =  url;
    if(country) {
        changebleURL = `${url}/countries/${country}`;
    }
    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changebleURL);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        console.log(data);
        const modifiedData = data.map( (dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modifiedData;
    } catch (error) {

    }
}

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        console.log(countries);
        return countries.map( country => country.name)
    } catch (error) {
        console.log(error);
    }
}

export const fetchIndiasData = async () => {
    try {
        const { data } = await axios.get(covidIndiaURL);
        console.log(data, ':: INDIAs Data ::');
        return data;
    } catch (error) {
        console.log(error);
    }
}