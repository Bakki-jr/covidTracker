import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const covid_india_url = 'https://api.covid19india.org/data.json';
const state_district_url = 'https://api.covid19india.org/state_district_wise.json';
const state_district_v2_url = 'https://api.covid19india.org/v2/state_district_wise.json';

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
        const { data } = await axios.get(covid_india_url);
        console.log(data, ':: INDIAs Data ::');
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const fetchStatesData = async () => {
    try {
        const { data } = await axios.get(state_district_url);
        console.log(data, ":: State's Data ::");
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchStatesDataV2 = async () => {
    try {
        const { data } = await axios.get(state_district_v2_url);
        console.log(data, ":: State's Data ::");
        return data;
    } catch (error) {
        console.log(error);
    }
}

