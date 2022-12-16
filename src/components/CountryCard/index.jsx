import { Link } from 'react-router-dom';
import './CountryCard.css';

function CountryCard({ flag, name, population, region, capital }) {
	return (
		<Link className="CountryCard" to={`/${region.toLowerCase()}/${name.toLowerCase()}`}>
			<div className="CountryCard__flag">
				<img src={flag} alt={`Flag of ${name}`} loading="lazy" />
			</div>
			<div className="CountryCard__info">
				<h2 className="CountryCard__name">{name}</h2>
				<p className="CountryCard__property">
					Population: <span>{population.toLocaleString('en-US')}</span>
				</p>
				<p className="CountryCard__property">
					Region: <span>{region}</span>
				</p>
				{capital ? (
					<p className="CountryCard__property">
						Capital: <span>{capital}</span>
					</p>
				) : null}
			</div>
		</Link>
	);
}

export { CountryCard };
