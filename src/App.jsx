//import { Counter } from "./Counter";
import { useEffect, useState } from "react";
//import { ChildClass } from "./ChildClass";
//import { Child } from "./Child";

// function App() {
//   //const values = useState();
//   // const [name, setName] = useState("Kyle");
//   // const [age, setAge] = useState(30);
//   // const name = values[0];
//   // const setName = values[1];

//   //const [person, setPerson] = useState({ name: "Roshni", age: 30 });

//   // function handleClick() {
//   //   setName("Roshni");
//   //   setAge(age + 1);
//   // }

//   //   function handleClick() {
//   //     setPerson((currentPerson) => {
//   //       return { ...currentPerson, name: "Sally" };
//   //     });
//   //   }

//   //   const [count, setCount] = useState(0);

//   //   return (
//   //     // <Counter />
//   //     // <h1 onClick={handleClick}>
//   //     //   Hi {person.name} {person.age}
//   //     // </h1>
//   //     <div>
//   //       <button
//   //         style={{ display: "block", marginBotton: "1rem" }}
//   //         onClick={() => setCount((c) => c + 1)}
//   //       >
//   //         {count}
//   //       </button>
//   //       <Child />
//   //     </div>
//   //   );

//   //Component Lifecycle
//   const [isShown, setIsShown] = useState(true);
//   const childComponent = isShown ? <Child /> : null;

//   return (
//     <div>
//       <button
//         style={{ display: "block", marginBotton: "1rem" }}
//         onClick={() => setIsShown((s) => !s)}
//       >
//         Show/Hide
//       </button>
//       {childComponent}
//     </div>
//   );
// }

export default function App() {
  const [users, setUsers] = useState();
  const [loading, setloading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setloading(true);
    setError(undefined);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((e) => setError(e))
      .finally(() => {
        setloading(false);
      });
  }, []);
  let jsx;
  if (loading) {
    jsx = <h2>Loading...</h2>;
  } else {
    jsx = JSON.stringify(users);
  }
  return (
    <div>
      <h1>Users</h1>
      {jsx}
    </div>
  );
}
