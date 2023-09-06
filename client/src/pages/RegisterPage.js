import {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"


export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response && response.status === 200) {
      alert('registration successful');
      navigate("/login");
    } else {
      alert('registration failed');
    }
  }
  return (
    <div className="flex-container">
    <div className="content-container content-res">
      <div className="form-container register-res">
      <div className="container">
        <form className="register" onSubmit={register}>
          <h1>
           Register
          </h1>
   <div className="form__group field">
    <input type="text"
     className="form__field resfield" 
     value={username}
     onChange={ev => setUsername(ev.target.value)}
     placeholder="Username " required />
    <label htmlFor="Username" className="form__label"> (Unique) Username </label>
  </div>
  
  <div className="form__group field">
    <input type="password"
     className="form__field" 
     value={password}
     onChange={ev => setPassword(ev.target.value)}
     placeholder="Password" required />
    <label htmlFor="Password" className="form__label">Password</label>
  </div>
  
  <button class="full-rounded">
  <span>Register</span>
  <div class="border-reg full-rounded"></div></button>
        </form>
        <div className="img2">
              <img src="/reg.png" alt="img" />
            </div>
            </div>
      </div>
    </div>
  </div>
  );
}


