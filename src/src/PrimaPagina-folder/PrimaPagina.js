import React from "react";
import ReactDOM from "react-dom";

import "./Primulcss.css";

class FirstPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: "",
      parola: "",
      displaystyle: 1
    };
  }

  UpdateFnc = ev => {
    if (ev.target.id === "user") {
      this.setState({
        user: ev.target.value
      });
    }
  };

  ChangeDisplayStyle = ev => {
    this.setState({
      displaystyle: this.state.displaystyle * -1
    });
  };

  render() {
    if (this.state.displaystyle === 1) {
      return (
        <div id="Second-Div">
          <div className="Header">
            <div id="text-Header"> My chat application</div>
          </div>
          <div id="center-Div">
            <div id="box">
              Login
              <br />
              <img
                className="img-style"
                src="http://pluspng.com/img-png/user-png-icon-user-icons-512.png"
              />
              <input
                className="NormfalInput"
                onChange={this.UpdateFnc}
                placeholder="Username"
              />
              <br />
              <img
                className="img-style"
                src="https://www.freeiconspng.com/uploads/lock-icon-png-10.png"
              />
              <input
                className="NormalInput"
                onChange={this.UpdateFnc}
                placeholder="Password"
              />
              <br />
              <button onClick={this.props.updateStatus}>Submit</button>
            </div>
          </div>
          <div className="Header last">
            <div id="Sign-Up" onClick={this.ChangeDisplayStyle}>
              Sign up{" "}
            </div>
          </div>
        </div>
      );
    } else if (this.state.displaystyle == -1)
      return (
        <div id="Second-Div">
          <div className="Header">
            <div id="text-Header"> My chat application</div>
          </div>
          <div id="center-Div">
            <div id="box2">
              Sign up
              <br />
              <img
                className="img-style"
                src="https://www.fortunefiles.org/templates/images/name-icon.png"
              />
              <input
                className="NormalInput"
                onChange={this.UpdateFnc}
                placeholder="First name"
              />
              <br />
              <img
                className="img-style"
                src="https://www.fortunefiles.org/templates/images/name-icon.png"
              />
              <input
                className="NormalInput"
                onChange={this.UpdateFnc}
                placeholder="Last Name"
              />
              <br />
              <img
                className="img-style"
                src="https://image.flaticon.com/icons/png/512/46/46951.png"
              />
              <input
                className="NormalInput"
                onChange={this.UpdateFnc}
                placeholder="Email"
              />
              <br />
              <img
                className="img-style"
                src="http://pluspng.com/img-png/user-png-icon-user-icons-512.png"
              />
              <input
                className="NormalInput"
                onChange={this.UpdateFnc}
                placeholder="Username"
              />
              <br />
              <img
                className="img-style"
                src="https://www.freeiconspng.com/uploads/lock-icon-png-10.png"
              />
              <input
                className="NormalInput"
                onChange={this.UpdateFnc}
                placeholder="Password"
              />
              <br />
              <button onClick={this.props.updateStatus}>Submit</button>
            </div>
          </div>
          <div className="Header last">
            <div id="Sign-Up" onClick={this.ChangeDisplayStyle}>
              Login
            </div>
          </div>
        </div>
      );
  }
}
export default FirstPage;
