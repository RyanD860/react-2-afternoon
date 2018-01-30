import React, { Component } from "react";

import Employee from "./models/Employee";
import EmployeeList from "./components/EmployeeList";
import EmployeeEditor from "./components/EmployeeEditor";

// components

class App extends Component {
  // constructor

  // selectEmployee

  // refresh

  render() {
    return (
      <div id="app">
        <Header id="app" />
        <div className="main-container">
          <EmployeeList id="main-container" />
          <EmployeeEditor id="main-container" />
        </div>
      </div>
    );
  }
}

export default App;
