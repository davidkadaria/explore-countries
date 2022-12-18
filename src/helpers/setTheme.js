function setTheme(theme) {
	localStorage.setItem('theme', theme);
	document.documentElement.className = theme;
}

export { setTheme };
