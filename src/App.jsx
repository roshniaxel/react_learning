//import { ClassComponent } from "./ClassComponent";
// import { FunctionComponent } from "./FunctionComponent";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { User } from "./User";

// function App() {
//   return (
//     <div>
//       {/* <ClassComponent />
//       <br />
//       <br /> */}
//       <FunctionComponent favouriteNumber={4} />
//     </div>
//   );
// }
// function App() {
//   const [items, setItems] = useState([
//     { id: crypto.randomUUID(), name: "Item 1" },
//     { id: crypto.randomUUID(), name: "Item 2" },
//   ]);

//   function addItem() {
//     setItems((currentItems) => {
//       return [...currentItems, { id: crypto.randomUUID(), name: "New name" }];
//     });
//   }

//   return (
//     <>
//       <button onClick={addItem}>Add Item</button>
//       {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
//       <pre>
//         {items.map((item) => {
//           return (
//             <React.Fragment key={item.id}>
//               <div key={item.id}>{item.name}</div>
//               <input type="text" />
//             </React.Fragment>
//           );
//         })}
//       </pre>
//     </>
//   );
// }

// User List
// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     const controller = new AbortController();
//     fetch("https://jsonplaceholder.typicode.com/users", {
//       signal: controller.signal,
//     })
//       .then((res) => res.json())
//       .then(setUsers)
//       .finally(() => {
//         setLoading(false);
//       });
//     return () => {
//       controller.abort();
//     };
//   }, []);
//   return (
//     <>
//       <h1> Users List</h1>
//       {loading ? (
//         <h2>Loading...</h2>
//       ) : (
//         <ul>
//           {users.map((user) => {
//             return (
//               <User
//                 key={user.id}
//                 {...user}
//                 // name={user.name}
//                 // email={user.email}
//                 // phone={user.phone}
//                 // username={user.username}
//               />
//             );
//           })}
//         </ul>
//       )}
//     </>
//   );
// }

//Render Raw Html
// const CUSTOM_HTML = `<h1>Hi</h1> <div>My name is Roshni</div>`;

// function App() {
//   return <div dangerouslySetInnerHTML={{ __html: CUSTOM_HTML }}></div>;
// }

//Hook Rules
// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title = count;
//   }, [count]);

//   return (
//     <>
//       <button onClick={() => setCount((c) => c - 1)}>-</button>
//       {count}
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//     </>
//   );
// }

//useRef hook
// function App() {
//   const [name, setName] = useState("");
//   const inputRef = useRef();
//   //const kyleRef = useRef("Kyle");
//   //kyleRef.current = "sally";
//   //console.log(kyleRef);

//   useEffect(() => {
//     console.log(inputRef.current.value);
//   }, [name]);

//   return (
//     <>
//       <label>
//         Name:
//         <input
//           value={name}
//           ref={inputRef}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//     </>
//   );
// }

//Refs in class component
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//     };
//     this.value = 7;
//     this.inputRef = React.createRef();
//   }

//   componentDidMount() {
//     this.inputRef.current.focus();
//   }

//   render() {
//     return (
//       <>
//         <label>
//           Name:
//           <input
//             value={this.state.name}
//             ref={this.inputRef}
//             // onChange={(e) => this.setState(name: e.target.value)}
//           />
//         </label>
//       </>
//     );
//   }
// }

// useCallBack Hook

// function App() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);

//   const printName = useCallback(() => {
//     console.log(`Name: ${name}`);
//   }, [name]);

//   useEffect(() => {
//     console.log("In Effect");
//     printName();
//   }, [printName]);

//   return (
//     <>
//       <label>
//         Name:
//         <input value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Age:
//         <input value={age} onChange={(e) => setAge(e.target.value)} />
//       </label>
//     </>
//   );
// }

// Custom Hooks
function App() {
  const [name, setName] = useState("");
  //const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  return (
    <div
      style={{
        background: isDarkMode ? "#333" : "white",
        color: isDarkMode ? "white" : "333",
      }}
    >
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <br />
      {/* <button onClick={() => setIsDarkMode((d) => !d)}>Toggel Dark Mode</button> */}
      <button onClick={toggleDarkMode}>Toggel Dark Mode</button>
    </div>
  );
}

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  function toggle() {
    setValue((currentValue) => !currentValue);
  }

  return [value, toggle];
}
export default App;
