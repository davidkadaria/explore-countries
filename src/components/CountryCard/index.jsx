import { Link } from 'react-router-dom';
import { CountryInfo } from '../';
import './CountryCard.css';

function CountryCard({ flag, name, population, region, capital }) {
	return (
		<Link className="CountryCard" to={`/${region.toLowerCase()}/${name.toLowerCase()}`}>
			<div className="CountryCard__flag">
				<img src={flag} alt={`Flag of ${name}`} />
			</div>
			<div className="CountryCard__info">
				<h2 className="CountryCard__name">{name}</h2>
				<CountryInfo prefix="Population" value={population.toLocaleString('en-US')} />
				<CountryInfo prefix="Region" value={region} />
				<CountryInfo prefix="Capital" value={capital} />
			</div>
		</Link>
	);
}

export { CountryCard };
