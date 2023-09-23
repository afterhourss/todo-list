const container = document.querySelector("[data-container]");
const form = document.querySelector("[data-form]");

class Project {
  constructor(title) {
    this.title = title;
    this.allTodos = [
      {
        desc: "this my first todo list",
        date: "30",
        priority: 2,
      },
      {
        desc: "this my second todo list",
        date: "12",
        priority: 1,
      },
      {
        desc: "this my third todo list",
        date: "29",
        priority: 3,
      },
    ];
  }
  getTodo() {
    return this.allTodos.map((todo) => todo.desc);
  }
  pushTodo(desc) {
    this.allTodos.push(desc);
  }
  setTodosPriorityOrder() {
    this.allTodos.sort((a, b) => b.priority - a.priority);
    return this.allTodos;
  }
  // setPriorityOrder(priority) {
  //   this.allTodos.priority.sort((a, b) => );
  // }
  // removeTodo(){
  //   this.allTodos = this.allTodos.map(todo =>)
  // }
}

class Todo {
  constructor(desc, priority) {
    this.desc = desc;
    this.date = new Date().getDate().toString();
    this.priority = priority;
  }
}

let project = new Project("🧾Projects");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
  render();
});

const addTodo = () => {
  const inputTodoDesc = document.querySelector("[data-form-value]").value;
  const inputTodoPriority = document.querySelector("[data-priority]").value;
  const newTodo = new Todo(inputTodoDesc, inputTodoPriority);
  project.pushTodo(newTodo);
};

const createTodo = (todo, priority) => {
  // create todo
  const list = document.createElement("div");
  const checkbox = document.createElement("input");
  const desc = document.createElement("p");

  list.classList.add("list");
  list.setAttribute("data-priority", priority);
  checkbox.setAttribute("type", "checkbox");
  desc.innerText = todo;

  container.appendChild(list);
  list.appendChild(checkbox);
  list.appendChild(desc);

  if (priority >= 3) {
    list.classList.add("list-priority-3");
  } else if (priority == 2) {
    list.classList.add("list-priority-2");
  }
};

// const todoChecked = () => {

// }

const refreshRender = () => {
  container.innerHTML = "";
};

const render = () => {
  // create title
  const projectTitle = document.querySelector("[data-project-title]");
  projectTitle.innerText = project.title;

  // render todo list

  refreshRender();
  project.setTodosPriorityOrder().forEach((todo) => {
    createTodo(todo.desc, todo.priority);
  });
};

render();
