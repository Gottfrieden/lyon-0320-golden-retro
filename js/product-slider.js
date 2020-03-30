function changeActiveTab() {
	const thumbnailImages = document.getElementsByClassName('media-image-thumbnail');
	const bigImage = document.getElementById('media-active-image');

	thumbnailImages.forEach(element => this.classList.toggle('active'));
}