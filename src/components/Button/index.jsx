import './Button.css';

function Button({ textContent, icon, clickHandler }) {
	return (
		<button className="Button" onClick={clickHandler}>
			{icon ? icon : null}
			{textContent}
		</button>
	);
}

export { Button };
