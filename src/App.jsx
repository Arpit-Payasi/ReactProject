import React, { useState, useEffect } from "react";
import app from "./Config/FirebaseConfig";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore,collection,addDoc } from "firebase/firestore";
import Home from "./home";
import Signin from "./Signin";
import Signup from "./Signup";
import Navbar from "./navbar";
import Events from "./events"
import ProtectedRoute from "./protectedRoutes";

const auth = getAuth(app);
const firestore=getFirestore(app)

function App() {
  const [user, setUser] = useState(null);
  function write(){
    addDoc(collection(firestore,"events"),
  {
    name:'esports',
    time:'today'
  })
  }
  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />   
          <ProtectedRoute user={user}>
            <Home />
          </ProtectedRoute>
        </>
      ),
    },
    {
      path: "/signin",
      element: (
        <>
          <Navbar />   
          <Signin />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Navbar />   
          <Signup />
        </>
      ),
    },
    {
      path: "/events",
      element: (
        <>
          <Navbar />   
          <ProtectedRoute user={user}>
            <Events />
          </ProtectedRoute>
        </>
      ),
    },
  ]);
  return (<div><RouterProvider router={router} />
  <button onClick={write}>click me</button>
  </div>);
}

export default App;
