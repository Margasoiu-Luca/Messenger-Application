import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import FirstPage from "./src/PrimaPagina-folder/PrimaPagina.js";

const rootElement = document.getElementById("root");

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      logged: -1
    };
  }

  changeStatus = ev => {
    this.setState({
      logged: this.state.logged * -1
    });
  };

  render() {
    if (this.state.logged === -1)
      return (
        <FirstPage
          updateStatus={this.changeStatus}
          status="this.state.logged"
        />
      );
    else return <h1>test</h1>;
  }
}

export default App;
