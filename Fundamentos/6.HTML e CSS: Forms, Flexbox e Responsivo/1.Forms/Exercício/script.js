const botaoEnviar = document.getElementById('sendButton');
botaoEnviar.addEventListener('click', function(event) {
	event.preventDefault();
})

const botaoApagar = document.getElementById('eraseButton');
botaoApagar.addEventListener('click', function() {
	window.location.reload();
})