import React from "react";

export default class AppClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Roshni",
      age: 1,
    };
  }
  render() {
    return (
      <h1 onClick={() => this.setState({ name: "Updated name" })}>
        Hi {this.state.name} {this.state.age}
      </h1>
    );
  }
}
