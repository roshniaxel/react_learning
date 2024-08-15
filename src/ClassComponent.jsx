import React from "react";
import { DisplayString } from "./DisplayString";

export class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 0,
      name: "",
    };
  }

  //   componentDidMount() {
  //     console.log("Render");
  //   }

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
