const lista = document.querySelector('#lista');
const btAdd = document.querySelector('#bt-adicionar');
const inputTexto = document.querySelector('#texto');

const verificarBD = () => {
    const dados = localStorage.getItem('item');

    if (!dados) {
        return [];
    } else {
        const resposta = JSON.parse(dados);   
        return resposta;
    }
};

const renderItem = (texto) => {    
    const item = document.createElement('li');
    item.innerText = texto;
    const btRemover = document.createElement('input');
    btRemover.type = 'button';
    btRemover.value = "Remover";
    btRemover.onclick = (evento) => {
        const pai = evento.target.parentElement;
        lista.removeChild(pai);

        tarefas.splice(tarefas.indexOf(texto), 1);
        localStorage.setItem('item', JSON.stringify(tarefas))
    }
    
    item.appendChild(btRemover);
    lista.appendChild(item);
}

const addItem = () => {
    const texto = inputTexto.value;
    
    renderItem(texto)
    
    inputTexto.value = '';

    tarefas.push(texto);
    localStorage.setItem('item', JSON.stringify(tarefas));
}

const tarefas = verificarBD();
tarefas.forEach((item) => renderItem(item));

btAdd.addEventListener('click', addItem);
inputTexto.addEventListener('keyup', (evento) => {
    if (evento.key === "Enter") {
        addItem();
    }
});