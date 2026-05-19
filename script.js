const paragrafo = document.querySelector('#paragrafo');
const botao = document.querySelector('#bt-alterar');

botao.addEventListener('click', () => {
    paragrafo.textContent = "O texto foi alterado com sucesso!";
    paragrafo.style.color = 'blue';
});