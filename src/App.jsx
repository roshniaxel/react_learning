// import { useRef, useState } from "react";
import { StateForm } from "./StateForm";
//import "./styles.css";

// function App() {
//   const nameRef = useRef();
//   //   const [name, setName] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     const name = nameRef.current.value;
//     if (name === "") return;
//     alert(`Name: ${name}`);
//   }

//   return (//
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name: </label>
//       <br />
//       <input id="name" type="text" ref={nameRef} />
//       {/* <input
//         type="text"
//         id="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       /> */}
//       <br />
//       <br />
//       <button> Alert Name</button>
//     </form>
//   );
// }

export default function App() {
  return <StateForm />;
}
// export default App;
