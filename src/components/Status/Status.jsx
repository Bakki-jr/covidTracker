import React, { Fragment } from 'react';
import cx from 'classnames';

import StatusCount from '../StatusCount/StatusCount'

import styles from './Status.module.css'
import CountUp from 'react-countup';

function Status({ data, tested }) {

	console.log(data, 'status');
	console.log(tested, 'tested');

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
			<div className={cx(styles.updatedTime,styles.cardStyle)}>
				<div className={styles.label}>Total Individual Cases Tested: <span className={styles.labelContent}> <CountUp start={0} end={Number(tested.totalindividualstested)} duration={1} separator="," /></span></div>
				<div className={styles.label}>Last updated on: <span className={styles.labelContent}>{tested.updatetimestamp}</span></div>
				<div className={styles.label}>Source: <a target='_blank' className={styles.labelContent} href={tested.source}>ICMR - PDF</a></div>
			</div>
		</Fragment>
	)
}

export default Status;
