import React from 'react'
import Paper from '@material-ui/core/Paper';
import styles from './StatusCount.module.css'
import CountUp from 'react-countup';

function StatusCount({ data }) {
	const setColor = 
	data.title === 'Confirmed' ? { color: '#007bff'} : 
	data.title === 'Active' ? { color: '#6c757d'} :
	data.title === 'Recovered' ? { color: '#28a745'} :
	{ color: '#ff073a'};
	return (
		<div className={styles.container}>
			<Paper className={styles.paperCard} style={setColor} elevation={2}>
				<div style={setColor} >
				<p className={styles.title}>
					{data.title}
				</p>
				<p className={styles.delta} style={{minHeight: '20px'}}>
					{data.title !== 'Active' || data.delta !=='' ? `[+${data.delta}]` : ''}
				</p>
				<p className={styles.count}>
					<CountUp start={0} end={Number(data.confirmed)} duration={2} separator="," />
				</p>
				</div>
			</Paper>
		</div>
	)
}

export default StatusCount
