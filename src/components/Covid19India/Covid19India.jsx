import React, { Fragment, useState, useEffect } from 'react'
import Header from '../Header/Header'

import { fetchIndiasData } from '../../api';
import Status from '../Status/Status';
import  StatesData from '../StatesData/StatesData';

import styles from './Covid19India.module.css';

function Covid19India() {
	const [countriesData, setcountriesData] = useState([]);
	const [totalIndividualsTested, setTotalIndividualsTested] = useState([]);
	useEffect(() => {
		const constFetchAPI = async () => {
			const totalCountData = await fetchIndiasData();
			setcountriesData(totalCountData.statewise);
			setTotalIndividualsTested(totalCountData.tested)
		}
		constFetchAPI(); 
	}, []);

	console.log(countriesData, 'cd');

	return (
		<Fragment>
			<Header title={'Go To - COVID19 Global'} path="/" />
			<div className={styles.statesWrapper}>Cases in INDIA:</div>
			<Fragment>{ countriesData.length &&  totalIndividualsTested.length ? <Status data={countriesData[0]} tested={totalIndividualsTested[totalIndividualsTested.length - 1]} /> : ''}</Fragment>
			<div className={styles.statesWrapper}>StateWise info:</div>
			<Fragment>{ countriesData.length ? <StatesData data={countriesData} /> : ''}</Fragment>
		</Fragment>
    )
}

export default Covid19India;
