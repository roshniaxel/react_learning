import React, { useEffect, useState } from "react";

export function Child() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  //   useEffect(() => {
  //     console.log("Render");
  //   });
  //   useEffect(() => {
  //     console.log(`My name is ${name} and I am ${age} years old`);
  //   }, [name, age]);

  useEffect(() => {
    document.addEventListener("click", () => {
      console.log("click");
    });

    return () => {
      console.log("Unmount");
    };
  }, []);

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
  return (
    <div className="child">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      My name is {name} and I am {age} years old
    </div>
  );
}
