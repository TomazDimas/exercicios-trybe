// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function cancelBehave(event) {
	event.preventDefault();
}

HREF_LINK.addEventListener('click', cancelBehave);
INPUT_CHECKBOX.addEventListener('click', cancelBehave);
INPUT_TEXT.addEventListener('keypress', function(event) {
	const pressedKey = event.key;
	if (pressedKey !== 'a') {
		event.preventDefault();
	}
});