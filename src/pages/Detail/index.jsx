import { Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, CountryInfo } from '../../components';
import { ArrowLeftIcon } from '../../icons';
import './Detail.css';

function Detail({ getCountryByRegionAndName, getBorderCountriesByCountryCodes }) {
	const navigate = useNavigate();
	const { region, name } = useParams();

	const countryData = getCountryByRegionAndName(region, name);
	const borderCountries = getBorderCountriesByCountryCodes(countryData.borders);
	// console.log(countryData);
	// console.log(borderCountries);
	return (
		<Fragment>
			<Button
				textContent="Back"
				icon={<ArrowLeftIcon />}
				clickHandler={() => navigate(-1)}
			/>
			<div className="Detail">
				<img
					className="Detail__flag"
					src={countryData.flags.svg}
					alt={`National flag of ${countryData.name.common}`}
				/>
				<h1 className="Detail__name">{countryData.name.common}</h1>
				<div className="Detail__info">
					<div className="Detail__info-group">
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
					<div className="Detail__info-group">
						<CountryInfo prefix="Top level domain" value={countryData.tld?.join(', ')} />
						<CountryInfo
							prefix="Currencies"
							value={Object.values(countryData.currencies)
								.map((obj) => obj.name)
								?.join(', ')}
						/>
						<CountryInfo
							prefix="Languages"
							value={Object.values(countryData.languages)?.join(', ')}
						/>
					</div>
				</div>
				{borderCountries.length > 0 ? (
					<div className="Detail__borders">
						<h3 className="Detail__borders-prefix">Border Countries: </h3>
						<div className="Detail__borders-list">
							{borderCountries.map((country) => (
								<Button
									key={`${country.region}/${country.name.common}`}
									textContent={country.name.common}
									clickHandler={() =>
										navigate(
											`/${country.region.toLowerCase()}/${country.name.common.toLowerCase()}`
										)
									}
								/>
							))}
						</div>
					</div>
				) : null}
			</div>
		</Fragment>
	);
}

export default Detail;
