import React, { useState, useEffect } from "react";
import app from "./Config/FirebaseConfig";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Home from "./home";
import Signin from "./Signin";
import Signup from "./Signup";
import Navbar from "./navbar";
import ProtectedRoute from "./protectedRoutes";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

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
          <Navbar />   {/* ✅ INSIDE router */}
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
          <Navbar />   {/* ✅ INSIDE router */}
          <Signin />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Navbar />   {/* ✅ INSIDE router */}
          <Signup />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
