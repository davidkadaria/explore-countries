import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop, getCurrentTheme, setTheme } from '../../helpers';
import { MoonIcon, SunIcon } from '../../icons';
import './Header.css';

function Header() {
	const [mode, setMode] = useState();

	useEffect(() => {
		const currentTheme = getCurrentTheme();
		setMode(currentTheme);
	}, []);

	const toggleTheme = (event) => {
		setMode((prevState) => {
			if (prevState !== 'dark') {
				setTheme('dark');
				return 'dark';
			}
			setTheme('light');
			return 'light';
		});
	};

	return (
		<header className="Header">
			<div className="Header__container">
				<Link onClick={scrollToTop} to="/">
					<h1 className="Header__heading">Where in the world?</h1>
				</Link>
				<div className="Header__theme-switch" onClick={toggleTheme}>
					{mode === 'dark' ? (
						<Fragment>
							<SunIcon /> Light Mode
						</Fragment>
					) : (
						<Fragment>
							<MoonIcon /> Dark Mode
						</Fragment>
					)}
				</div>
			</div>
		</header>
	);
}

export { Header };
