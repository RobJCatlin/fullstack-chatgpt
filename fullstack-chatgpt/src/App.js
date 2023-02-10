import React, { useState } from "react";
import axios from "axios";
import WelcomePage from "./Welcome";
import "./App.css";
import { useNavigate, Route, Routes } from "react-router-dom";

function App(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001", { username, password })
      .then((response) => {
        console.log(response);
        navigate("/welcome");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/welcome'
          element={<WelcomePage {...props} username={username} />}
        />
      </Routes>
      <h1>Let the games begin</h1>
      <form onSubmit={handleSubmit} action='/Welcome'>
        <label>
          Username:
          <input type='text' value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
