let tasks = [
  { id: 1, name: "Estudiar clase Métodos de arreglos.", completed: false },
  { id: 2, name: "Estudiar guía de estudio.", completed: false },
  { id: 3, name: "Leer desafío de la semana.", completed: false },
];

const taskList = document.querySelector(".tasks");
const addButton = document.querySelector(".add");
const total = document.querySelector("#total");
const done = document.querySelector("#done");
const addValue = document.querySelector(".addInput");

addButton.addEventListener("click", () => {
  if(addValue.value === ""){
    alert('Agrega un nombre para la tarea')
  }
  if(tasks.length != 0) {
    const idMapping = tasks[tasks.length-1].id;
    const newTask = { id: idMapping+1, name: addValue.value, completed: false }
    tasks.push(newTask);
  } else {
    const newTask = { id: 1, name: addValue.value, completed: false }
    tasks.push(newTask);
  }
  addValue.value = "";
  renderTask();
});

deleteTask = (id) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  tasks.splice(taskIndex, 1);
  renderTask();
}

changeStatus = (id) => {  
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if(tasks[taskIndex].completed == false) {
    const newObject = { id: tasks[taskIndex].id, name: tasks[taskIndex].name, completed: true };
    tasks.splice(taskIndex, 1, newObject);
  } else {
    const newObject = { id: tasks[taskIndex].id, name: tasks[taskIndex].name, completed: false };
    tasks.splice(taskIndex, 1, newObject);
  }
  renderTask();
}

const renderTask = () => {
  let html = "";
  let html2 ="";
  let doneCount= [];
  for (const task of tasks) {
    html2 = task.completed ? 
    `<input class="checkbox" type="checkbox" onclick="changeStatus(${task.id})" checked="true">`
    : `<input class="checkbox" type="checkbox" onclick="changeStatus(${task.id})" >`;
    html += `
      <tr>
        <td>${task.id}</td>
        <td class="name">${task.name}</td>
        <td><button class="delete" onclick="deleteTask(${task.id})"> x </button></td>
        <td>${html2}</td>
      </tr> 
    `;
    if(task.completed === true) {
      doneCount.push(task);
    }
  }
  taskList.innerHTML = html;
  total.innerHTML = tasks.length;
  done.innerHTML = doneCount.length;
}

renderTask();

