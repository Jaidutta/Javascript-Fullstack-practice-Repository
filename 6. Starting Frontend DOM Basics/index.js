let todoIndex = 0;
function addToDo() {

  // console.log("Hi there, inside todo"); --> was used to test   


  // write the code that reads the contents of the input box
  // creates a new todo on the html dom
  // clears the input box

  
  // 1. // write the code that reads the contents of the input box
  let element = document.getElementById("todoInput")
  // console.log(element);
  const todo = element.value
  if(todo === "") {
    alert("Please enter a todo");
    return;
  }
  element.value = ""; // clear the input box after reading the value

  // 2. creates a new div and adds the todo to the div
  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("id", `todo${todoIndex}`);

  const todoSpan = document.createElement("span");
  todoSpan.innerHTML = todo;
  todoDiv.appendChild(todoSpan);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete Todo";
  deleteButton.setAttribute("onclick", `deleteTodo(${todoIndex})`);


  todoDiv.appendChild(deleteButton);

  // 3. adds the new div as a child to the todoList div
  const todoList = document.getElementById("todoList");
  todoList.appendChild(todoDiv);

  
  todoIndex = todoIndex + 1;
}

function deleteTodo(index) {
  // write the code that deletes the todo from the html dom
  console.log(`delete todo with index ${index}`);

  // grab the specific todo div to be removed using the index and remove it from the todoList div. Always remember to remove the child from the parent element. You cannot directly remove an element without going through the parent element.

  const todoDivtoRemove = document.getElementById(`todo${index}`);
  document.getElementById("todoList").removeChild(todoDivtoRemove);
  
  // Alternative solution 
  // todoDivtoRemove.parentElement.removeChild(todoDivtoRemove);

}
  