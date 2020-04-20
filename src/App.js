import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Cards, Chart, CountryPicker, Header } from './components';
import Covid19India from './components/Covid19India/Covid19India';

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
						<Route path="/" exact>
							<Header title={'Go To - COVID19 INDIA'} path="/covid19-India" />
							<Cards data={data} />
							<CountryPicker handleCountryChange={this.handleCountryChange} />
							<Chart data={data} country={country} />
						</Route>
						<Route path="/covid19-India" component={Covid19India}></Route>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App;