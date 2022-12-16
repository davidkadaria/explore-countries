import './Search.css';

function Search() {
	return (
		<div className="Search">
			<input
				className="Search__input"
				type="search"
				placeholder="Search for a country..."
			/>
		</div>
	);
}

export { Search };
