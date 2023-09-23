/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const container = document.querySelector(\"[data-container]\");\r\nconst form = document.querySelector(\"[data-form]\");\r\n\r\nclass Project {\r\n  constructor(title) {\r\n    this.title = title;\r\n    this.allTodos = [\r\n      {\r\n        desc: \"this my first todo list\",\r\n        date: \"30\",\r\n        priority: 2,\r\n      },\r\n      {\r\n        desc: \"this my second todo list\",\r\n        date: \"12\",\r\n        priority: 1,\r\n      },\r\n      {\r\n        desc: \"this my third todo list\",\r\n        date: \"29\",\r\n        priority: 3,\r\n      },\r\n    ];\r\n  }\r\n  getTodo() {\r\n    return this.allTodos.map((todo) => todo.desc);\r\n  }\r\n  pushTodo(desc) {\r\n    this.allTodos.push(desc);\r\n  }\r\n  setTodosPriorityOrder() {\r\n    this.allTodos.sort((a, b) => b.priority - a.priority);\r\n    return this.allTodos;\r\n  }\r\n  // setPriorityOrder(priority) {\r\n  //   this.allTodos.priority.sort((a, b) => );\r\n  // }\r\n  // removeTodo(){\r\n  //   this.allTodos = this.allTodos.map(todo =>)\r\n  // }\r\n}\r\n\r\nclass Todo {\r\n  constructor(desc, priority) {\r\n    this.desc = desc;\r\n    this.date = new Date().getDate().toString();\r\n    this.priority = priority;\r\n  }\r\n}\r\n\r\nlet project = new Project(\"🧾Projects\");\r\n\r\nform.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  addTodo();\r\n  render();\r\n});\r\n\r\nconst addTodo = () => {\r\n  const inputTodoDesc = document.querySelector(\"[data-form-value]\").value;\r\n  const inputTodoPriority = document.querySelector(\"[data-priority]\").value;\r\n  const newTodo = new Todo(inputTodoDesc, inputTodoPriority);\r\n  project.pushTodo(newTodo);\r\n};\r\n\r\nconst createTodo = (todo, priority) => {\r\n  // create todo\r\n  const list = document.createElement(\"div\");\r\n  const checkbox = document.createElement(\"input\");\r\n  const desc = document.createElement(\"p\");\r\n\r\n  list.classList.add(\"list\");\r\n  list.setAttribute(\"data-priority\", priority);\r\n  checkbox.setAttribute(\"type\", \"checkbox\");\r\n  desc.innerText = todo;\r\n\r\n  container.appendChild(list);\r\n  list.appendChild(checkbox);\r\n  list.appendChild(desc);\r\n\r\n  if (priority >= 3) {\r\n    list.classList.add(\"list-priority-3\");\r\n  } else if (priority == 2) {\r\n    list.classList.add(\"list-priority-2\");\r\n  }\r\n};\r\n\r\n// const todoChecked = () => {\r\n\r\n// }\r\n\r\nconst refreshRender = () => {\r\n  container.innerHTML = \"\";\r\n};\r\n\r\nconst render = () => {\r\n  // create title\r\n  const projectTitle = document.querySelector(\"[data-project-title]\");\r\n  projectTitle.innerText = project.title;\r\n\r\n  // render todo list\r\n\r\n  refreshRender();\r\n  project.setTodosPriorityOrder().forEach((todo) => {\r\n    createTodo(todo.desc, todo.priority);\r\n  });\r\n};\r\n\r\nrender();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;