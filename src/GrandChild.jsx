import { ThemeContext } from "./App";
import React from "react";

export class GrandChild extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ isDarkMode, toggleTheme }) => (
          <button
            style={{
              background: isDarkMode ? "white" : "#333",
              color: isDarkMode ? "#333" : "white",
              border: "none",
              padding: ".5em",
              borderRadius: ".25em",
              cursor: "pointer",
            }}
            onClick={toggleTheme}
          >
            ToggleTheme
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}
