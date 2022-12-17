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
			<div className="Detail">
				<img className="Detail__flag" src={countryData.flags.svg} alt="" />
				<h1 className="Detail__name">{countryData.name.common}</h1>
				<div className="Detail__info">
					<div className="Detail__info-basic"></div>
					<div className="Detail__info-additional"></div>
				</div>
			</div>
		</Fragment>
	);
}

export default Detail;
