import React from "react";
//import { TodoList } from "./TodoList";
//import { TodoListClass } from "./TodoListClass";
//import { NameFunc } from "./NameFunc";
//import { TodoListItem } from "./TodoListItem";
//import { Name } from "./NameClass";
//import { TodoListItemClass } from "./TodoListItemClass";
//import { User } from "./User";
import user from "./user.json";
import "./style.css";
import img from "./reactlogo.png";

function App() {
  //React.createElement("h1", { id: "test" }, "Hello World");
  // return (
  //   <h1 id="5" clasName="test">
  //     hello world <span style={{ color: red }}> Bye </span>
  //   </h1>
  // );
  //return <label>{2 + 4}</label>;
  // const customLabel = <label htmlFor="inputId">TEST number</label>;
  // return (
  //   <div className="large" id="largeDiv">
  //     {/* <label htmlFor="inputId">TEST Label</label> */}
  //     {customLabel}
  //     <input id="inputId" type="number" defaultValue={3} />
  //   </div>
  // );
  // return (
  //   <h1>
  //     hi
  //     <span>span: {undefined}</span>
  //   </h1>
  // );
  // return (
  //   <div>
  //     <h1>Todo list</h1>
  //     <ul>
  //       <li>Item 1</li>
  //       <li>Item 2</li>
  //       <li>Item 3</li>
  //       <li>Item 4</li>
  //     </ul>
  //   </div>
  // );
  return (
    <div>
      {/* <TodoListClass /> */}
      {/* <Name /> */}
      {/* <NameFunc name="Custom Name" age={27} /> */}
      {/* <NameFunc>
        <span>Child name</span>
      </NameFunc> */}

      {/* <TodoListItem isComplete={false}>Todo Item 1</TodoListItem> */}

      {/* <Name name="custom name" /> */}
      {/* <TodoListItemClass> Todo List Item 1 </TodoListItemClass> */}
      {/* <User name="Klye" age={27} /> */}
      <h1>{JSON.stringify(user)}</h1>
      <img src={img} />
    </div>
  );
}

// class Name extends React.Component {
//   render() {
//     return <h1>Kyle Cook</h1>;
//   }
// }

export default App;
