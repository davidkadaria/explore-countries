import { SearchIcon } from '../../icons';
import './Search.css';

function Search({ setValue }) {
	return (
		<div className="Search">
			<SearchIcon />
			<input
				className="Search__input"
				type="search"
				placeholder="Search for a country..."
				onChange={(event) => setValue(event.target.value.toLowerCase())}
			/>
		</div>
	);
}

export { Search };
