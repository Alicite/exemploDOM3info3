const lista = document.querySelector('#lista');

setTimeout(() => {
    const item = document.createElement('li');
    item.innerText = "Item 1 do 3info";
    const btRemover = document.createElement('input');
    btRemover.type = 'button';
    btRemover.value = "Remover";
    btRemover.onclick = (evento) => {
        const pai = evento.target.parentElement;
        lista.removeChild(pai);
    }

    item.appendChild(btRemover);
    lista.appendChild(item);
}, 3000)