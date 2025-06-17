function loadTodos(){
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todoList" : []};
    console.log(todos);
    return todos;
}

function addTodoToLocalStorage(todoText){
    const todos = loadTodos();
    todos.todoList.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function appendTodoInHtml(todoText){
    const todoList = document.getElementById("todoList");

    const todoItem = document.createElement("li");

    const textDiv = document.createElement("div");


    textDiv.textContent = todoText;
    todoItem.classList.add("todoItem");

    const wrapper = document.createElement("div");

    const editBtn = document.createElement("button");   
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    const completedBtn = document.createElement("button");
    completedBtn.textContent = "Completed";
    completedBtn.classList.add("completeBtn");

    todoList.appendChild(todoItem);
    todoItem.appendChild(textDiv);
    wrapper.appendChild(editBtn);
    wrapper.appendChild(completedBtn);
    wrapper.appendChild(deleteBtn);
    todoItem.appendChild(wrapper);

}

document.addEventListener("DOMContentLoaded", () => {

    const todoInput = document.getElementById("todoInput");

    const submitButton = document.getElementById("addTodo");

    const todoList = document.getElementById("todoList");

    submitButton.addEventListener("click", (event) => {
        const todoText = todoInput.value;

        if( todoText == "" ){
            alert("please write something to do");
        }
        else{
            addTodoToLocalStorage(todoText);
            appendTodoInHtml(todoText);
            todoInput.value = "";
        }
    })

    todoInput.addEventListener("change", (event) => {
        const todoText = event.target.value.trim();
        
    })

    const todos = loadTodos();
    todos.todoList.forEach(todo => {
        appendTodoInHtml(todo);
    });
})