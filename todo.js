let toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

let TODOS_LS = 'toDos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    let li = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.classList.add("btn_margin");
    let span = document.createElement("span");
    let newId = toDos.length + 1;
    
    delBtn.innerHTML = "DELETE";
    delBtn.addEventListener("click", function(event) {
        let btn = event.target;
        let li = btn.parentNode;
        toDoList.removeChild(li);
        let cleanToDos = toDos.filter(function(toDo) {
            return toDo.id !== parseInt(li.id);
        })
        toDos = cleanToDos;
        saveToDos();
    });

    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    let toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    let currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
 
function loadToDos() {
    let loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        let parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
    else {

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();