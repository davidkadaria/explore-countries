import { Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components';
import { ArrowLeftIcon } from '../../icons';
import './Detail.css';

function Detail({ getCountryByRegionAndName }) {
	const navigate = useNavigate();
	const { region, name } = useParams();

	const countryData = getCountryByRegionAndName(region, name);
	console.log(countryData);
	return (
		<Fragment>
			<Button
				textContent="Back"
				icon={<ArrowLeftIcon />}
				clickHandler={() => navigate('/')}
			/>
		</Fragment>
	);
}

export default Detail;
