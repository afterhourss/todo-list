const container = document.querySelector("[data-container]");
const form = document.querySelector("[data-form]");

class Project {
  constructor(title) {
    this.title = title;
    this.allTodos = [
      {
        desc: "this my first todo list",
        date: "30",
      },
      {
        desc: "this my second todo list",
        date: "12",
      },
      {
        desc: "this my third todo list",
        date: "29",
      },
    ];
  }
  getTodo() {
    return this.allTodos.map((todo) => todo.desc);
  }
  pushTodo(desc) {
    this.allTodos.push(desc);
  }
}

class Todo {
  constructor(desc) {
    this.desc = desc;
    this.date = new Date().getDate().toString();
  }
}

let project = new Project("🧾Projects");

const addTodo = () => {
  const inputTodoDesc = document.querySelector("[data-form-value]").value;
  const newTodo = new Todo(inputTodoDesc);
  project.pushTodo(newTodo);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
  render();
});

const refreshRender = () => {
  container.innerHTML = "";
};

const createTodo = (todo) => {
  // create todo
  const list = document.createElement("div");
  const checkbox = document.createElement("input");
  const desc = document.createElement("p");

  list.classList.add("list");
  checkbox.setAttribute("type", "checkbox");
  desc.innerText = todo;

  container.appendChild(list);
  list.appendChild(checkbox);
  list.appendChild(desc);
};

const render = () => {
  // create title
  const projectTitle = document.querySelector("[data-project-title]");
  projectTitle.innerText = project.title;

  // render todo list
  refreshRender();
  project.getTodo().forEach((todo) => {
    createTodo(todo);
  });
};

render();
