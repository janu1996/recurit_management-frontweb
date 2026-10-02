import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const favorites = useSelector(
    (state) => state.favorites
  );

  return (
    <nav className="navbar">

      {/* LOGO */}

      <div className="logo">
        Recruit<span>Pro</span>
      </div>


      {/* NAVIGATION */}

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/jobs">
          Jobs
        </Link>


        {/* LOGGED-IN USER OPTIONS */}

        {user && (
          <>
            <Link to="/add-job">
              Add Job
            </Link>

            <Link to="/my-applications">
              My Applications
            </Link>
          </>
        )}


        {/* FAVORITES */}

        <Link to="/favorites">
          Favorites ({favorites.length})
        </Link>


        {/* LOGGED-OUT */}

        {!user && (
          <>
            <Link to="/register">
              Register
            </Link>

            <Link to="/login">
              Login
            </Link>
          </>
        )}


        {/* LOGGED-IN */}

        {user && (
          <Link to="/logout">
            Logout
          </Link>
        )}

      </div>

    </nav>
  );
}

export default Navbar;