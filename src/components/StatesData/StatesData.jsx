import React, { Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import cx from 'classnames';

import styles from './StatesData.module.css';

function StatesData({ data }) {
	console.log(data, ':: stateWise Data ::');
	const statesData = data.slice(1);;
	console.log(statesData, ':: Removed total object from array ::')
	return (
		<Fragment>
			<TableContainer className={styles.tableContainer} component={Paper} elevation={2}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell className={cx(styles.heading, styles.state)}>State</TableCell>
							<TableCell className={cx(styles.heading, styles.confirmed)} align="right">Confirmed</TableCell>
							<TableCell className={cx(styles.heading, styles.active)} align="right">Active</TableCell>
							<TableCell className={cx(styles.heading, styles.recovered)} align="right">Recovered</TableCell>
							<TableCell className={cx(styles.heading, styles.deaths)} align="right">Deaths</TableCell>
							<TableCell className={cx(styles.heading, styles.lastUpdate)} align="right">Last Updated</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{statesData.map((row) => (
							<TableRow key={row.state}>
								<TableCell className={cx(styles.state, styles.fontSegoe)} component="th" scope="row">
									{(row.state).toUpperCase()}
								</TableCell>
								<TableCell className={cx(styles.confirmed, styles.fontMono)} align="right"><span className={styles.delta}>{row.deltaconfirmed !== '0' ? `[+${row.deltaconfirmed}] ` : ''}</span>{row.confirmed}</TableCell>
								<TableCell className={cx(styles.active, styles.fontMono)} align="right">{row.active}</TableCell>
								<TableCell className={cx(styles.recovered, styles.fontMono)} align="right"><span className={styles.delta}>{row.deltarecovered !== '0' ? `[+${row.deltarecovered}] ` : ''}</span> {row.recovered}</TableCell>
								<TableCell className={cx(styles.deaths, styles.fontMono)} align="right"><span className={styles.delta}>{row.deltadeaths !== '0' ? `[+${row.deltadeaths}] ` : ''}</span>{row.deaths}</TableCell>
								<TableCell className={cx(styles.lastupdatedtime, styles.fontMono)} align="right">{row.lastupdatedtime}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Fragment>
	)
}

export default StatesData;
