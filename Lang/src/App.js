import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErrorParr] = useState("");
  const [errPass, setErrorPass] = useState("");

  const error = () => {
    if (email === "Pri") {
      alert("True");
    } else {
      alert("False");
    }
  };

  const errorParr = () => {
    setErrorParr((e) => {
      if (username.length < 8) {
        return setErrorParr(<p>* Incorrect Username</p>);
      } else {
        return setErrorParr(<p>Valid Username</p>);
      }
    });
  };

  const checkPassword = () => {
    setErrorPass((e) => {
      if (password.length < 8) {
        return setErrorPass(<p>* Incorrect Password</p>);
      } else {
        return setErrorPass(<p>Valid Password</p>);
      }
    });
  };

  return (
    <div className="App">
      <div id="con" className="contact">
        <p className="about-p">Register</p>
        <div className="row form-row">
          <div className="col-md">
            <Form className="row g-3">
              <div className="col-md-12">
                <Form.Control
                  type="name"
                  className="form-control"
                  id="inputName4"
                  placeHolder="Name"
                  onInputCapture={errorParr}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {err}
              <div className="col-md-12">
                <Form.Control
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <Form.Control
                  type="text"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  onInputCapture={checkPassword}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errPass}
              <div className="col-4"></div>
              <div className="col-4" style={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  className="btn btn-secondary btn-md fo-btn"
                  onClick={error}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
