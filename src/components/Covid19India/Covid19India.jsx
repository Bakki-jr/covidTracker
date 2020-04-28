import React, { Fragment, useState, useEffect } from 'react';
import Skeleton from "@material-ui/lab/Skeleton";
import Header from '../Header/Header';

import { fetchIndiasData } from '../../api';
import Status from '../Status/Status';
import StatesData from '../StatesData/StatesData';

import styles from './Covid19India.module.css';

function Covid19India() {
	const [countriesData, setcountriesData] = useState([]);
	const [totalIndividualsTested, setTotalIndividualsTested] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			const totalCountData = await fetchIndiasData();
			setcountriesData(totalCountData.statewise);
			setTotalIndividualsTested(totalCountData.tested);
		}
		fetchAPI();
	}, []);

	console.log(countriesData, 'cd');

	const skeletonWave = (
		<Fragment>
			{[...Array(10)].map((e, i) => <Skeleton animation="wave"  width="80%" height={30} key={i}/>)}
		</Fragment>
	);

	return (
		<Fragment>
			<Header title={'Go To - COVID19 Global'} path="/global" />
			<div className={styles.statesWrapper}>Cases in INDIA:</div>
			<Fragment>{countriesData.length && totalIndividualsTested.length ? <Status data={countriesData[0]} tested={totalIndividualsTested[totalIndividualsTested.length - 1]} /> : <Skeleton style={{marginTop: '15px'}} animation="wave" variant="rect" width="80%" height={118} />}</Fragment>
			<div className={styles.statesWrapper}>StateWise info: <span style={{fontSize: '12px'}}>[click on state for detailed info]</span></div>
			<Fragment>{countriesData.length ? <StatesData data={countriesData} /> : skeletonWave}</Fragment>
		</Fragment>
	)
}

export default Covid19India;
