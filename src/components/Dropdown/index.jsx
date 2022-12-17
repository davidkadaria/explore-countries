import { useState } from 'react';
import { ChevronDownIcon } from '../../icons';
import './Dropdown.css';

const regionsList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

function Dropdown({ currentRegion, setRegion }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen((prevState) => !prevState);
	};

	const toggleSelect = (region) => {
		if (region === currentRegion) {
			setRegion('');
		} else {
			setRegion(region);
		}
		setIsOpen(false);
	};

	return (
		<div className="Dropdown">
			<button className="Dropdown__button" onClick={toggleMenu}>
				{currentRegion || 'Filter by Region'}
			</button>
			<ChevronDownIcon />
			<ul className={`Dropdown__menu ${isOpen ? 'Dropdown__menu--open' : ''}`}>
				{regionsList.map((region) => (
					<li
						className={`Dropdown__item ${
							region === currentRegion ? 'Dropdown__item--selected' : ''
						}`}
						key={region}
						onClick={() => toggleSelect(region)}
					>
						{region}
					</li>
				))}
			</ul>
		</div>
	);
}

export { Dropdown };
