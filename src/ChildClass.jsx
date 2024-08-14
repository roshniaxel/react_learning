import React, { useEffect, useState } from "react";
// Component lifecycle
// export function Child() {
//   const [name, setName] = useState("");
//   return (
//     <div className="child">
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <br />
//       My name is {name}
//     </div>
//   );
// }

// useEffect Hook
// export function Child() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);

//   useEffect(() => {
//     console.log("Render");
//   });
//   useEffect(() => {
//     console.log(`My name is ${name} and I am ${age} years old`);
//   }, [name, age]);

//   useEffect(() => {
//     console.log("Hi");
//   }, []);

//   useEffect(() => {
//     document.title = name;
//   }, [name]);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       console.log(`My name is ${name} and I am ${age} years old`);
//     }, 1000);
//     return () => {
//       clearTimeout(timeout);
//     };
//   }, [name, age]);
//   return (
//     <div className="child">
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <br />
//       <br />
//       <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
//       {age}
//       <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
//       <br />
//       My name is {name} and I am {age} years old
//     </div>
//   );
// }
export class ChildClass extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 0,
      name: "",
    };
  }

  componentDidMount() {
    console.log("Render");
  }

  componentDidUpdate() {
    console.log("Render");
  }

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button
          onClick={() =>
            this.setState((currentState) => {
              return {
                age: currentState.age - 1,
              };
            })
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={() =>
            this.setState((currentState) => {
              return {
                age: currentState.age + 1,
              };
            })
          }
        >
          +
        </button>
        My name is {this.state.name} and I am {this.state.age} years old.
      </div>
    );
  }
}
