import { useState, Fragment } from 'react';
import {
	CountryCardsWrapper,
	CountryCard,
	FilterWrapper,
	Search,
	Dropdown,
} from '../../components';

function Home({ countries }) {
	const [searchValue, setSearchValue] = useState('');
	const [region, setRegion] = useState('');

	const filter = (countries) => {
		if (region !== '' && searchValue !== '') {
			return countries.filter((country) => {
				return (
					country.region === region &&
					country.name.common.toLowerCase().includes(searchValue)
				);
			});
		} else if (region !== '' && searchValue === '') {
			return countries.filter((country) => {
				return country.region === region;
			});
		} else if (region === '' && searchValue !== '') {
			return countries.filter((country) => {
				return country.name.common.toLowerCase().includes(searchValue);
			});
		} else {
			return countries;
		}
	};

	return (
		<Fragment>
			<FilterWrapper>
				<Search setValue={setSearchValue} />
				<Dropdown currentRegion={region} setRegion={setRegion} />
			</FilterWrapper>
			<CountryCardsWrapper>
				{countries ? (
					countries.length === 0 ? (
						<div>404</div>
					) : (
						filter(countries).map((country) => (
							<CountryCard
								key={`${country.region}/${country.name.common}`}
								flag={country.flags.svg}
								name={country.name.common}
								population={country.population}
								region={country.region}
								capital={country.capital?.join()}
							/>
						))
					)
				) : (
					<div>loading...</div>
				)}
			</CountryCardsWrapper>
		</Fragment>
	);
}

export default Home;
