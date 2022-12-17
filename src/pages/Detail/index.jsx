import { Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, CountryInfo } from '../../components';
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
					<div className="Detail__info-basic">
						<CountryInfo
							prefix="Native name"
							value={Object.values(countryData.name.nativeName)
								.map((obj) => obj.common)
								.join(', ')}
						/>
						<CountryInfo
							prefix="Population"
							value={countryData.population.toLocaleString('en-US')}
						/>
						<CountryInfo prefix="Region" value={countryData.region} />
						<CountryInfo prefix="Sub region" value={countryData.subregion} />
						<CountryInfo prefix="Capital" value={countryData.capital?.join(', ')} />
					</div>
					<div className="Detail__info-additional">
						<CountryInfo prefix="Top level domain" value={countryData.tld?.join(', ')} />
						<CountryInfo
							prefix="Currencies"
							value={Object.keys(countryData.currencies)?.join(', ')}
						/>
						<CountryInfo
							prefix="Languages"
							value={Object.values(countryData.languages)?.join(', ')}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Detail;
