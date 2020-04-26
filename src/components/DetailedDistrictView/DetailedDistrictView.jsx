import React, { Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import cx from 'classnames';

import styles from './DetailedDistrictView.module.css';

function DetailedDistrictView({ data }) {
	const districtData = data.districtData;

	return (
		<Fragment>
			<TableContainer className={styles.tableContainer} component={Paper} elevation={2}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell className={cx(styles.heading, styles.state)}>District</TableCell>
							<TableCell className={cx(styles.heading, styles.confirmed)} align="right">Confirmed</TableCell>
							<TableCell className={cx(styles.heading, styles.active)} align="right">Active</TableCell>
							<TableCell className={cx(styles.heading, styles.recovered)} align="right">Recovered</TableCell>
							<TableCell className={cx(styles.heading, styles.deaths)} align="right">Deaths</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{districtData.map((row) => (
							<TableRow key={row.district}>
								<TableCell value={row.district} className={cx(styles.state, styles.fontSegoe)} component="th" scope="row">{row.district}</TableCell>
								<TableCell className={cx(styles.confirmed, styles.fontMono)} align="right"><span className={styles.delta}>{row.delta.confirmed !== 0 ? `[+${row.delta.confirmed}] ` : ''}</span>{row.confirmed}</TableCell>
								<TableCell className={cx(styles.active, styles.fontMono)} align="right">{row.active}</TableCell>
								<TableCell className={cx(styles.recovered, styles.fontMono)} align="right"><span className={styles.delta}>{row.delta.recovered !== 0 ? `[+${row.delta.recovered}] ` : ''}</span> {row.recovered}</TableCell>
								<TableCell className={cx(styles.deaths, styles.fontMono)} align="right"><span className={styles.delta}>{row.delta.deceased !== 0 ? `[+${row.delta.deceased}] ` : ''}</span>{row.deceased}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Fragment>
	)
}

export default DetailedDistrictView;
