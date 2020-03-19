function showTab(evt, tabButton) {
	let i = 0;
	let tabContentContainer = document.getElementsByClassName('tab-content-container');
	let tab = document.getElementsByClassName('tab');

	for (i = 0; i < tabContentContainer.length; i++) {
		tabContentContainer[i].style.display = "none";
	}

	for (i = 0; i < tab.length; i++) {
		tab[i].className = tab[i].className.replace(" active", "");
	}

	document.getElementById(tabButton).style.display = "block";
	evt.currentTarget.className += " active";
}