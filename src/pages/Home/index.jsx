import { Fragment } from 'react';
import {
	CountryCardsWrapper,
	CountryCard,
	FilterWrapper,
	Search,
} from '../../components';

function Home({ countries }) {
	return (
		<Fragment>
			<FilterWrapper>
				<Search />
				<div>DropDown</div>
			</FilterWrapper>
			<CountryCardsWrapper>
				{countries.map((country) => (
					<CountryCard
						key={`${country.region}/${country.name.common}`}
						flag={country.flags.svg}
						name={country.name.common}
						population={country.population}
						region={country.region}
						capital={country.capital?.join()}
					/>
				))}
			</CountryCardsWrapper>
		</Fragment>
	);
}

export default Home;
