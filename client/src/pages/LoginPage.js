import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./login.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  }

  if (redirect) {
    alert("login successful");
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div className="flex-container">
        <div className="content-container">
          <div className="form-container loginres">
          <div className="container">
            <form className="login" onSubmit={login}>
              <h1>Login</h1>
              <div className="form__group field">
                <input
                  type="text"
                  className="form__field "
                  value={username}
                  onChange={(ev) => setUsername(ev.target.value)}
                  placeholder="Username "
                  required
                />
                <label htmlFor="Username" className="form__label">
                  {" "}
                  Username
                </label>
              </div>

              <div className="form__group field">
                <input
                  type="password"
                  className="form__field"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  placeholder="Password"
                  required
                />
                <label htmlFor="Password" className="form__label">
                  Password
                </label>
              </div>

              <button class="full-rounded">
                <span>Login</span>
                <div class="border full-rounded"></div>
              </button>
            </form>
            <div className="img">
              <img src="/welcome.png" alt="img" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
