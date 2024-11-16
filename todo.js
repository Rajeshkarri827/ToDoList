let container = document.getElementById("container");

function handleAddTodo() {
  let todo = document.createElement("div");
  todo.classList.add("todo");

  let id = document.getElementById("task_id");
  let details = document.getElementById("task_details");

  if (id.value === "" || details.value === "") {
    alert("Both values are required");
  } else {
    let title = document.createElement("h1");
    title.innerText = id.value;

    let todo_details = document.createElement("p");
    todo_details.innerText = details.value;

    todo.appendChild(title);
    todo.appendChild(todo_details);

    let edit = document.createElement("button");
    edit.innerText = "EDIT";
    edit.style.backgroundColor = "blue";

    let delete_button = document.createElement("button");
    delete_button.innerText = "DELETE";
    delete_button.style.backgroundColor = "red";

    let completed = document.createElement("button");
    completed.innerText = "COMPLETED";
    completed.style.backgroundColor = "green";

    todo.appendChild(edit);
    todo.appendChild(delete_button);
    todo.appendChild(completed);
    container.append(todo);

    edit.addEventListener("click", () => {
      id.value = title.innerText;
      details.value = todo_details.innerText;
      container.removeChild(todo);
    });

    delete_button.addEventListener("click", () => {
      container.removeChild(todo);
    });

    completed.addEventListener("click", () => {
      todo_details.style.textDecoration = "line-through";
      todo_details.style.backgroundColor = "yellow";
      todo.style.backgroundColor = "lightgreen";
      todo.style.color = "white";
    });

    id.value = "";
    details.value = "";
  }
}
