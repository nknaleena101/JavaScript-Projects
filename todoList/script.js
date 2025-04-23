const inputElement = document.querySelector('#new-task');
const todoListElement = document.querySelector('.todo-list');

let todoList = [];

showHtml()

function addTodo(){
    const todo = inputElement.value;
    todoList.push(todo);

    inputElement.value = "";

    console.log(todoList);
    showHtml();
}

function showHtml(){
    let htmlCode = '';
    for(let i = 0; i<todoList.length; i++){
        const html = `
            <li class="todo-item">
                    <input type="checkbox">
                    <span>${todoList[i]}</span>
                    <button class="delete" onClick="todoList.splice(${i},1); showHtml()">X</button>
                </li>
        `;
        htmlCode += html;
    }
    todoListElement.innerHTML = `${htmlCode}`;
}