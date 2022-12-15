import axios from 'axios';
import { useState, useEffect, Fragment, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header, MainWrapper } from './components';

const Home = lazy(() => import('./pages/Home'));
const Detail = lazy(() => import('./pages/Detail'));

function App() {
	const [countries, setCountries] = useState();

	useEffect(() => {
		axios.get('https://restcountries.com/v3.1/all').then((res) => {
			setCountries(res.data);
		});
	}, []);

	const getCountryById = (id) => {
		return countries.find((country) => country.id === id);
	};

	return (
		<Fragment>
			<Header />
			<MainWrapper>
				{countries ? (
					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							<Route path="/" element={<Home countries={countries} />} />
							<Route
								path="/detail/:id"
								element={<Detail getCountryById={getCountryById} />}
							/>
						</Routes>
					</Suspense>
				) : (
					<div>Still loading...</div>
				)}
			</MainWrapper>
		</Fragment>
	);
}

export default App;
