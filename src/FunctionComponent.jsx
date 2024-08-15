import { useEffect, useState } from "react";
import { DisplayString } from "./DisplayString";

export function FunctionComponent({ favouriteNumber }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    document.title = name;
  }, [name]);

  //   let jsx;
  //   if (favouriteNumber != null) {
  //     jsx = `My favourite number is ${favouriteNumber}`;
  //   }
  return (
    <div className="child">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      {/* {favouriteNumber != null && `My favourite number is ${favouriteNumber}`} */}
      {favouriteNumber > 5
        ? "My favourite number is large"
        : "My favourite number is small"}
      <DisplayString name={name} age={age} />
    </div>
  );
}
