import React, { Fragment, useState, useEffect } from 'react'
import Header from '../Header/Header'

import { fetchIndiasData } from '../../api';
import Status from '../Status/Status';
import  StatesData from '../StatesData/StatesData';

import styles from './Covid19India.module.css';

function Covid19India() {
	const [countriesData, setcountriesData] = useState({});
	useEffect(() => {
		const constFetchAPI = async () => {
			const totalCountData = await fetchIndiasData();
			setcountriesData(totalCountData.statewise);
		}
		constFetchAPI(); 
	}, []);

	console.log(countriesData, 'cd');

	return (
		<Fragment>
			<Header title={'Go to - COVID19 Global'} path="/" />
			<div className={styles.statesWrapper}>Cases in INDIA:</div>
			<Fragment>{ countriesData.length ? <Status data={countriesData[0]} /> : ''}</Fragment>
			<div className={styles.statesWrapper}>StateWise info:</div>
			<Fragment>{ countriesData.length ? <StatesData data={countriesData} /> : ''}</Fragment>
		</Fragment>
    )
}

export default Covid19India;
