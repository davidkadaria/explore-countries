import { SearchIcon } from '../../icons';
import './Search.css';

function Search() {
	return (
		<div className="Search">
			<SearchIcon />
			<input
				className="Search__input"
				type="search"
				placeholder="Search for a country..."
			/>
		</div>
	);
}

export { Search };
