import { Fragment } from 'react';
import { CountryCardsWrapper, CountryCard } from '../../components';

function Home({ countries }) {
	return (
		<Fragment>
			<CountryCardsWrapper>
				<CountryCard />
			</CountryCardsWrapper>
		</Fragment>
	);
}

export default Home;
