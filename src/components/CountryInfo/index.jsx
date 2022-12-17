import './CountryInfo.css';

function CountryInfo({ prefix, value }) {
	return (
		<p className="CountryInfo">
			{prefix}: <span className="CountryInfo__value">{value}</span>
		</p>
	);
}

export { CountryInfo };
