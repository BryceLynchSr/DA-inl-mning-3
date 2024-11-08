
let todo = document.querySelector("#input");
let add = document.querySelector("#todo-button");
let list = document.querySelector("#todo-list");

add.addEventListener("click", function(){

    let li = document.createElement("li");
    li.innerText = todo.value;
    list.appendChild(li);
    todo.value= "";

    let span = document.createElement("span");
    span.innerText = "[X]";
    li.appendChild(span);

    let check = document.createElement("span");
        check.innerText = "[Check]"
        li.appendChild(check);

    span.addEventListener("click", function(){
        li.remove();
    })

        check.addEventListener("click", function(){
            li.style.backgroundColor = "lightgreen";
        })

})