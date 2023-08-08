export const scrollPercent = () => {
	const bodyST = document.body.scrollTop;
	const docST = document.documentElement.scrollTop;
	const docSH = document.documentElement.scrollHeight;
	const docCH = document.documentElement.clientHeight;


	return (docST + bodyST) / (docSH - docCH) * 100
}
