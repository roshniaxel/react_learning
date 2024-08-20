//import { useEffect, useState, createContext } from "react";
//import { Child } from "./Child";
//import React from "react";
// export const ThemeContext = createContext();

// export default function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   function toggleTheme() {
//     setIsDarkMode((d) => !d);
//   }

//   useEffect(() => {
//     document.body.style.background = isDarkMode ? "#333" : "white";
//     document.body.style.color = isDarkMode ? "white" : "#333";
//   }, [isDarkMode]);

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       <Child />
//       <p>Lorem Ipsum</p>
//     </ThemeContext.Provider>
//   );
// }

// export default function App() {
//   const [items, setItems] = useState([1, 2, 3, 4, 5]);
//   const [filteredItems, setFilteredItems] = useState(items);

//   function updateFilteredItems(e) {
//     if (e.target.value === "") {
//       setFilteredItems(items);
//     } else {
//       setFilteredItems(items.filter((item) => item < e.target.valueAsNumber));
//     }
//   }
//   return (
//     <>
//       <label htmlFor="lessThan">Show Less Than</label>
//       <input id="lessThan" type="number" onChange={updateFilteredItems} />
//       <br />
//       <br />
//       <div>{items.join(", ")}</div>
//       <br />
//       <button onClick={() => setItems((i) => [...i, 2.5])}>
//         Add 2.5 To List
//       </button>
//     </>
//   );
// }

// export default function App() {
//   return <div>{import.meta.env.VITE_URL}</div>;
// }

import { createContext, useEffect, useReducer, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
//import "./styles.css";
import { TodoFilterForm } from "./TodoFilterForm";
import { TodoList } from "./TodoList";

const LOCAL_STORAGE_KEY = "TODOS";
const ACTIONS = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
};

function reducer(todos, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      return [
        ...todos,
        { name: payload.name, completed: false, id: crypto.randomUUID() },
      ];
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, completed: payload.completed };
        }

        return todo;
      });
    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== payload.id);
    case ACTIONS.UPDATE:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, name: payload.name };
        }

        return todo;
      });
    default:
      throw new Error(`No action found for ${type}.`);
  }
}

export const TodoContext = createContext();

function App() {
  const [filterName, setFilterName] = useState("");
  const [hideCompletedFilter, setHideCompletedFilter] = useState(false);
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value == null) return initialValue;

    return JSON.parse(value);
  });

  const filteredTodos = todos.filter((todo) => {
    if (hideCompletedFilter && todo.completed) return false;
    return todo.name.includes(filterName);
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addNewTodo(name) {
    dispatch({ type: ACTIONS.ADD, payload: { name } });
  }

  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: todoId, completed } });
  }

  function updateTodoName(id, name) {
    dispatch({ type: ACTIONS.UPDATE, payload: { id, name } });
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE, payload: { id: todoId } });
  }

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        addNewTodo,
        toggleTodo,
        updateTodoName,
        deleteTodo,
      }}
    >
      <TodoFilterForm
        name={filterName}
        setName={setFilterName}
        hideCompleted={hideCompletedFilter}
        setHideCompleted={setHideCompletedFilter}
      />
      <TodoList />
      <NewTodoForm />
    </TodoContext.Provider>
  );
}

export default App;
