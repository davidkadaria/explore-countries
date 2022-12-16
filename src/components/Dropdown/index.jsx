import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '../../icons';
import './Dropdown.css';

const regionsList = [
	{ id: 1, name: 'Africa', selected: false },
	{ id: 2, name: 'America', selected: false },
	{ id: 3, name: 'Asia', selected: false },
	{ id: 4, name: 'Europe', selected: false },
	{ id: 5, name: 'Oceania', selected: false },
];

function Dropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const [regions, setRegions] = useState(regionsList);
	let mountedOnce = false;

	useEffect(() => {
		!mountedOnce ? (mountedOnce = true) : console.log('second');
	}, [regions]);

	const toggleMenu = () => {
		setIsOpen((prevState) => !prevState);
	};

	const toggleSelect = (id) => {
		setRegions((prevState) => {
			const newState = prevState.map((region) => {
				if (region.id === id) {
					return { ...region, selected: !region.selected };
				}
				return { ...region };
			});
			return newState;
		});
	};

	return (
		<div className="Dropdown">
			<button className="Dropdown__button" onClick={toggleMenu}>
				Filter by Region
			</button>
			<ChevronDownIcon />
			<ul className={`Dropdown__menu ${isOpen ? 'Dropdown__menu--open' : ''}`}>
				{regions.map((region) => (
					<li
						className={`Dropdown__item ${
							region.selected ? 'Dropdown__item--selected' : ''
						}`}
						key={region.id}
						onClick={() => toggleSelect(region.id)}
					>
						{region.name}
					</li>
				))}
			</ul>
		</div>
	);
}

export { Dropdown };
