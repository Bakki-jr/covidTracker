import React, { Fragment } from 'react'

import StatusCount from '../StatusCount/StatusCount'

import styles from './Status.module.css'

function Status({ data }) {

	console.log(data, 'status');

	const confirmedData = {
		title: 'Confirmed',
		confirmed: data.confirmed,
		delta: data.deltaconfirmed
	}

	const ActivedData = {
		title: 'Active',
		confirmed: data.active,
		delta: ''
	}

	const RecoveredData = {
		title: 'Recovered',
		confirmed: data.recovered,
		delta: data.deltarecovered
	}

	const DeathsData = {
		title: 'Deaths',
		confirmed: data.deaths,
		delta: data.deltadeaths
	}

	return (
		<Fragment>
			<div className={styles.container}>
				<StatusCount data={confirmedData} />
				<StatusCount data={ActivedData} />
				<StatusCount data={RecoveredData} />
				<StatusCount data={DeathsData} />
			</div>
			<div className={styles.updatedTime}> Last updated on: {data.lastupdatedtime}</div>
		</Fragment>
	)
}

export default Status;
