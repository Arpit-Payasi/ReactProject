import React from "react"
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import app from "./Config/FirebaseConfig";
import "./signup.css"

const auth = getAuth(app);

function Signup(){
  const [useremail,setUseremail]=useState("")
  const [userpass,setUserpass]=useState("")

  function storeE(e){
    setUseremail(e.target.value)
  }

  function storeP(e){
    setUserpass(e.target.value)
  }

  function signup() {
    createUserWithEmailAndPassword(
      auth,
      useremail,
      userpass
    ).then((v) => {
      console.log(v);
    });
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Sign up</h1>

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

        <button className="auth-btn" onClick={signup}>
          sign in
        </button>
      </div>
    </div>
  );
}

export default Signup;
