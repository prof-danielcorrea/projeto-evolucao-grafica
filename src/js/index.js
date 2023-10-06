

const botoes = document.querySelectorAll(".botao");
const versoes = document.querySelectorAll(".versao");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarVersao();

		botao.classList.add("selecionado");
		versoes[indice].classList.add("selecionada");
	});
});

function desselecionarVersao() {
	const versaoSelecionada = document.querySelector(".versao.selecionada");
	versaoSelecionada.classList.remove("selecionada");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}
