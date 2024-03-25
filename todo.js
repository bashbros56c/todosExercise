
const form = document.querySelector("form");
const textbox = document.getElementById("addTodo")
const ul = document.getElementById("list")

const savedTodosString = localStorage.getItem("todos")
const savedTodos = JSON.parse(savedTodosString)

if (localStorage.getItem("todos") !== null){
for (let i = 0; i < localStorage.length; i++){
    const innerTxt = savedTodos.text
    const li = document.createElement("li");
    console.log(innerTxt)
    const button = document.createElement("button");
    button.innerText = "X"
    ul.append(li)
    li.append(innerTxt)
    li.append(button)
    console.log("innerTxt", innerTxt)
}}

const array = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    const li = document.createElement("li");
    const button = document.createElement('button');
    button.innerText = "X"
    ul.append(li)
    li.append(textbox.value)
    li.append(button)


    const todo = {
    text : li.innerText.slice(0,-1),
    isDone : false,
}
const todoString = JSON.stringify(todo)
array.push(todoString)
localStorage.setItem("todos",array)

})

ul.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
    e.target.classList.toggle("strikeThrough")
    }
    })
ul.addEventListener("click", function(e){
     if (e.target.tagName === "BUTTON"){
    e.target.parentElement.remove()
}})

