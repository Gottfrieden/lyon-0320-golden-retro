function showTab() {
	const buyItTab = document.getElementById('#buy-tab');
	const valueTab = document.getElementById('#value-tab');
	const infoTab = document.getElementById('#info-tab');
	buyItTab.classList.toggle('visible');
	valueTab.classList.toggle('visible');
	infoTab.classList.toggle('visible');
}