import { useEffect, useState } from "react";

export default function ThemeChange() {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};
	// initially set the theme and "listen" for changes to apply them to the HTML tag
	useEffect(() => {
		const htmlTag = document.querySelector('html');
		if (htmlTag) {
			htmlTag.setAttribute('data-theme', theme);
		}
	}, [theme]);
	return (
		<label className="swap swap-rotate">
			<input onClick={toggleTheme} type="checkbox" />
			<div className="swap-on">DARKMODE</div>
			<div className="swap-off">LIGHTMODE</div>
		</label>
	);
}
