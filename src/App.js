import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Cards, Chart, CountryPicker, Header, Covid19India, DistrictData } from './components';

import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			data: {},
			country: ''
		}
	}

	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);
		this.setState({ data: fetchedData, country: country });
		console.log(country);
	}

	async componentDidMount() {
		const fetchedData = await fetchData();
		console.log(fetchedData);
		this.setState({ data: fetchedData });
	}
	render() {
		const { data, country } = this.state;
		return (
			<Router>
				<div className={styles.container}>
					<Switch>
						<Route path="/" exact component={Covid19India}></Route>
						<Route path="/global">
							<Header title={'Go To - COVID19 INDIA'} path="/" />
							<Cards data={data} />
							<CountryPicker handleCountryChange={this.handleCountryChange} />
							<Chart data={data} country={country} />
						</Route>
						<Route path="/state/:stateName" component={DistrictData}></Route>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App;