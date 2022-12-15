import './Header.css';

function Header() {
	return (
		<header className="Header">
			<div className="Header__container">
				<h1 className="Header__heading">Where in the world?</h1>
				<div className="Header__theme-switch">Dark Mode</div>
			</div>
		</header>
	);
}

export { Header };