import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios'

import "./Primulcss.css";


class FirstPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: "",
      register_username:"",
      register_password:"",
      register_email:"",
      parola: "",
      displaystyle: 1,
      first_name:"",
      last_name:""
    };
  }


  UpdateFnc = ev => {
      this.setState({
          [ev.target.id]:ev.target.value
      })
    }

  CheckStatusLogin = ev => {
    axios.post("http://localhost:3003/login",{
        username:this.state.user,
        password:this.state.parola
    })
    .then(res =>{
        console.log(res)
        alert("Pe succes")
        if(res.status===200){
            window.localStorage.setItem('cheiasecreta',res.data.token)
            this.props.updateStatus()
        }
    })
    .catch(err =>{
        alert('Eroare backend')
    })
  }


  CheckStatusRegister = ev =>{
      axios.post("http://localhost:3003/register",{
          username:this.state.register_username,
          password:this.state.register_password,
          email:this.state.register_email
      })
      .then(res =>{
          if(res.status===200){
              alert('Inregistrare corecta')
          }
          else if(res.stauts!==500){
              alert('Inregistrare gresita')
          }
          else{
              alert('Eroare')
          }
      })
      .catch(err =>{
          alert('Eroare')
      })
  }


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
                id="user"
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
                id="parola"
                className="NormalInput"
                onChange={this.UpdateFnc}
                placeholder="Password"
              />
              <br />
              <button onClick={this.CheckStatusLogin}>Submit</button>
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
                id="register_email"
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
                id="register_username"
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
                id="register_password"
                className="NormalInput"
                onChange={this.UpdateFnc}
                placeholder="Password"
              />
              <br />
              <button onClick={this.CheckStatusRegister}>Submit</button>
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
