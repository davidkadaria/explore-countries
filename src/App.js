import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header, MainWrapper } from './components';

import Home from './pages/Home';
import Detail from './pages/Detail';

const fields = [
	'name',
	'flags',
	'population',
	'region',
	'subregion',
	'capital',
	'tld',
	'currencies',
	'languages',
	'borders',
	'fifa',
	'cca3',
];

function App() {
	const [countries, setCountries] = useState();

	useEffect(() => {
		axios
			.get(`https://restcountries.com/v3.1/all?fields=${fields.join(',')}`)
			.then((res) => {
				setCountries(res.data);
			});
	}, []);

	const getCountryByRegionAndName = (region, name) => {
		return countries.find((country) => {
			return (
				country.region.toLowerCase() === region &&
				country.name.common.toLowerCase() === name
			);
		});
	};

	const getBorderCountriesByCountryCodes = (countryCodes) => {
		return countries.filter((country) => {
			return countryCodes.includes(country.fifa) || countryCodes.includes(country.cca3);
		});
	};

	return (
		<Fragment>
			<Header />
			<MainWrapper>
				{countries ? (
					<Routes>
						<Route path="/" element={<Home countries={countries} />} />
						<Route
							path="/:region/:name"
							element={
								<Detail
									getCountryByRegionAndName={getCountryByRegionAndName}
									getBorderCountriesByCountryCodes={getBorderCountriesByCountryCodes}
								/>
							}
						/>
					</Routes>
				) : (
					<p>LoAdInG...</p>
				)}
			</MainWrapper>
		</Fragment>
	);
}

export default App;
