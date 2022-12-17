import { useState, Fragment } from 'react';
import RenderIfVisible from 'react-render-if-visible';
import {
	CountryCardsWrapper,
	CountryCard,
	FilterWrapper,
	Search,
	Dropdown,
	ResultsNotFound,
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

	const countriesToRender = filter(countries);

	return (
		<Fragment>
			<FilterWrapper>
				<Search setValue={setSearchValue} />
				<Dropdown currentRegion={region} setRegion={setRegion} />
			</FilterWrapper>
			{countriesToRender.length === 0 ? (
				<ResultsNotFound />
			) : (
				<CountryCardsWrapper>
					{countriesToRender.map((country) => (
						<RenderIfVisible
							key={`${country.region}/${country.name.common}`}
							defaultHeight={325}
							stayRendered
						>
							<CountryCard
								flag={country.flags.svg}
								name={country.name.common}
								population={country.population}
								region={country.region}
								capital={country.capital?.join(', ')}
							/>
						</RenderIfVisible>
					))}
				</CountryCardsWrapper>
			)}
		</Fragment>
	);
}

export default Home;
