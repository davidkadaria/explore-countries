import { useParams } from 'react-router-dom';

function Detail({ getCountryByRegionAndName }) {
	const { region, name } = useParams();
	const countryData = getCountryByRegionAndName(region, name);
	console.log(countryData);
	return <h2></h2>;
}

export default Detail;
