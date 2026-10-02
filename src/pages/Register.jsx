import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/users", user);

      alert("Registration successful!");

      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
  }

  return (
    <main>
      <div className="auth-container">

        <div className="auth-card">

          <p className="form-label">
            RECRUITPRO
          </p>

          <h1>Create Account</h1>

          <p className="auth-description">
            Register to access recruitment features.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={user.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={user.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="auth-btn"
            >
              Create Account
            </button>

          </form>

          <p>
            Already have an account?{" "}
            <button
              type="button"
              className="text-link"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </p>

        </div>

      </div>
    </main>
  );
}

export default Register;