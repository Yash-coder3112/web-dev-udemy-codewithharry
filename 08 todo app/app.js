const addTodoBtn=document.querySelector("#addTodoBtn")
const inputTag=document.getElementById("todoInput" )

let todoText
let todos=[];

let todosString=localStorage.getItem("todos")
if(todosString){
    todos=JSON.parse(todosString)
}

// const populateTodos=  

addTodoBtn.addEventListener("click",()=>{
    todoText=inputTag.value
    console.log(todoText)
    inputTag.value=""
    let todo={
        title:todoText,
        isCompleted: false
    }
    todos.push(todo)
    localStorage.setItem("todos",todos.toString)
})