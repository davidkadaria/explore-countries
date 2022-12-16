import './CountryCard.css';

function CountryCard({ flag, name, population, region, capital }) {
	return (
		<div className="CountryCard">
			<div className="CountryCard__flag">
				<img src={flag} alt={`Flag of ${name}`} />
			</div>
			<div className="CountryCard__info">
				<h2 className="CountryCard__name">{name}</h2>
				<p className="CountryCard__prop">
					Population: <span>{population}</span>
				</p>
				<p className="CountryCard__prop">
					Region: <span>{region}</span>
				</p>
				<p className="CountryCard__prop">
					Capital: <span>{capital}</span>
				</p>
			</div>
		</div>
	);
}

export { CountryCard };
