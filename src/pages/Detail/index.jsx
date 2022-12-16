function Detail({ getCountryById }) {
	const countryData = getCountryById(13);
	// console.log(countryData);
	return <h2>{countryData.name.official}</h2>;
}

export default Detail;
