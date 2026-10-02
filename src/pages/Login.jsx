import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.get("/users", {
        params: {
          email: email.trim().toLowerCase(),
          password: password
        }
      });

      if (response.data.length > 0) {
        const user = response.data[0];

        localStorage.setItem(
          "user",
          JSON.stringify(user)
        );

        alert("Login successful!");

        navigate("/");
        window.location.reload();
      } else {
        alert("Invalid Email or Password");
      }

    } catch (error) {
      console.log(error);
      alert("Login failed");
    }
  }

  return (
    <main>
      <div className="auth-container">

        <div className="auth-card">

          <p className="form-label">
            RECRUITPRO
          </p>

          <h1>Welcome Back</h1>

          <p className="auth-description">
            Login to access your recruitment account.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

            <button
              type="submit"
              className="auth-btn"
            >
              Login
            </button>

          </form>

          <p>
            Don't have an account?{" "}
            <button
              type="button"
              className="text-link"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </p>

        </div>

      </div>
    </main>
  );
}

export default Login;