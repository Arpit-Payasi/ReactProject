import React from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./Config/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const auth = getAuth(app);

function Signin() {
  const [useremail, setUseremail] = useState("");
  const [userpass, setUserpass] = useState("");
  const navigate = useNavigate();

  function storeE(e) {
    setUseremail(e.target.value);
  }

  function storeP(e) {
    setUserpass(e.target.value);
  }

  function signin() {
    signInWithEmailAndPassword(auth, useremail, userpass)
      .then((v) => {
        console.log(v);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Sign in</h1>

        <input
          className="auth-input"
          onChange={storeE}
          type="email"
          placeholder="Enter your email"
          value={useremail}
        />

        <input
          className="auth-input"
          onChange={storeP}
          type="password"
          placeholder="Enter your password"
          value={userpass}
        />

        <button className="auth-btn" onClick={signin}>
          sign in
        </button>
      </div>
    </div>
  );
}

export default Signin;
