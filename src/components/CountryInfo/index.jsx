import './CountryInfo.css';

function CountryInfo({ prefix, value }) {
	if (!value) {
		return null;
	}
	return (
		<p className="CountryInfo">
			{prefix}: <span className="CountryInfo__value">{value}</span>
		</p>
	);
}

export { CountryInfo };
