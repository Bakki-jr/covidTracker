import React, { Fragment, useState, useEffect } from 'react';
import Skeleton from "@material-ui/lab/Skeleton";

import Header from '../Header/Header';
import Status from '../Status/Status';

import { fetchStatesData, fetchIndiasData, fetchStatesDataV2 } from '../../api';

import styles from './DistrictData.module.css';

import DetailedDistrictView from '../DetailedDistrictView/DetailedDistrictView';

function DistrictData({ match: { params: { stateName } } }) {
	const [districtData, setdistrictData] = useState({});
	const [stateInfoData, setstateInfoData] = useState({});

	// useEffect(() => {
	// 	const fetchStatesAPI = async () => {
	// 		const totalStateData = await fetchStatesData();
	// 		setdistrictData(totalStateData[stateName]);
	// 	}
	// 	fetchStatesAPI();
	// }, []);

	useEffect(() => {
		const fetchStatesAPI = async () => {
			const totalStateData = await fetchStatesDataV2();
			totalStateData.map((statesData, i) => {
				if (statesData.state === stateName) {
					setdistrictData(totalStateData[i]);
				}
			});
		}
		fetchStatesAPI();
	}, []);

	useEffect(() => {
		const fetchCountriesAPI = async () => {
			const totalStatesData = await fetchIndiasData();
			const statesInfo = totalStatesData.statewise;
			statesInfo.map((stateWise, i) => {
				if (stateWise.state === stateName) {
					setstateInfoData(statesInfo[i]);
				}
			});
		}
		fetchCountriesAPI();
	}, []);

	const skeletonWave = (
		<Fragment>
			{[...Array(10)].map((e, i) => <Skeleton animation="wave"  width="80%" height={30} key={i}/>)}
		</Fragment>
	);

	return (
		<Fragment>
			<Header title={'Go To - COVID19 India'} path="/" />
			<div className={styles.statesWrapper}>Cases in {stateInfoData.state}:</div>
			{stateInfoData !== {} ? <Status data={stateInfoData} /> : <Skeleton style={{marginTop: '15px'}} animation="wave" variant="rect" width="100%" height={118} />}
			<div className={styles.statesWrapper}>DistrictWise info:</div>
			{districtData.hasOwnProperty('districtData') ? <DetailedDistrictView data={districtData} /> : skeletonWave}
		</Fragment>
	)
}

export default DistrictData;
