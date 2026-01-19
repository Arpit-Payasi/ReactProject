import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "./Config/FirebaseConfig";
import "./navbar.css"
const auth = getAuth(app);

function Navbar() {
  const navigate = useNavigate();

  function logout() {
    signOut(auth).then(() => {
      navigate("/signin");
    });
  }

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>{" "}
      <Link to="/signin">Signin</Link>{" "}
      <Link to="/signup">Signup</Link>{" "}
      <Link to="/events">Events</Link>{" "}
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;
