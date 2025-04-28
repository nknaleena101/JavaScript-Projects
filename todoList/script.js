const inputElement = document.querySelector('#new-task');
const todoListElement = document.querySelector('.todo-list');
const dateElement = document.getElementById('current-date');

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

showHtml();

const today = new Date();
const formated = new Intl.DateTimeFormat('en-GB').format(today);

dateElement.innerText = formated;

function addTodo(){
    const todo = inputElement.value.trim(); // to avoid empty task
    if(todo === "") return;

    todoList.push(todo);
    localStorage.setItem("todoList", JSON.stringify(todoList)); 

    inputElement.value = "";
    showHtml();
}

function showHtml(){
    let htmlCode = '';
    for(let i = 0; i<todoList.length; i++){
        const html = `
            <li class="todo-item">
                    <input type="checkbox">
                    <span>${todoList[i]}</span>
                    <button class="delete" onClick="deleteTodo(${i})">X</button>
                </li>
        `;
        htmlCode += html;
    }
    todoListElement.innerHTML = `${htmlCode}`;
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    showHtml();
}