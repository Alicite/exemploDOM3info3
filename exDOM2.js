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

const renderItem = (texto, id) => {
    const item = document.createElement('li');
    item.innerText = texto;

    const btRemover = document.createElement('input');
    btRemover.type = 'button';
    btRemover.value = "❌";
    btRemover.onclick = (evento) => {
        const pai = evento.target.parentElement;
        lista.removeChild(pai);

        tarefas.splice(tarefas.indexOf(texto), 1);
        localStorage.setItem('item', JSON.stringify(tarefas))
    }
    
    const btEditar = document.createElement('input');
    btEditar.type = 'button';
    btEditar.value = "✏️";
    btEditar.onclick = editItem;
    btEditar.dataset.id = id;

    item.appendChild(btRemover);
    item.appendChild(btEditar);
    lista.appendChild(item);
}

const editItem = (evento) => {
    const alvo = evento.target;

    const inputEditar = document.createElement('input');
    inputEditar.type = 'text';
    inputEditar.classList.add('input-editar');
    inputEditar.placeholder = alvo.parentElement.textContent;
    inputEditar.dataset.id = alvo.dataset.id;

    const btconfirmar = document.createElement('input');
    btconfirmar.type = 'button';
    btconfirmar.value = '✔️';
    btconfirmar.onclick = confirmarEdicao;
    btconfirmar.dataset.id = alvo.dataset.id;

    const id = alvo.dataset.id;
    alvo.parentElement.innerHTML = '';
    const todosLi = document.querySelectorAll('li');
    todosLi[id].appendChild(inputEditar);
    todosLi[id].appendChild(btconfirmar);
}

const confirmarEdicao = (evento) => {
    const id = evento.target.dataset.id;
}

const addItem = () => {
    const texto = inputTexto.value;
    
    tarefas.push(texto);
    renderItem(texto, tarefas.length)
    
    inputTexto.value = '';

    localStorage.setItem('item', JSON.stringify(tarefas));
}

const tarefas = verificarBD();
tarefas.forEach((item, index) => renderItem(item, index));

btAdd.addEventListener('click', addItem);
inputTexto.addEventListener('keyup', (evento) => {
    if (evento.key === "Enter") {
        addItem();
    }
});