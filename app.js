const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// add item to todo list

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length) {
        addItem(todo);
    }
    addForm.reset();
})

const addItem = (todo) => {
    const html =  `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  list.innerHTML += html;
}

// remove item

list.addEventListener('click', e => {
    // console.log(e.target.classList);
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// filter todos

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filteredTodos(term);
});

// add "filtered" CSS class to every element that does not includes the search term
const filteredTodos = (term) => {
    // convert html collections to an array using Array.from(list.children)
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));
    // to remove filtered class when backspace
    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
    
}


