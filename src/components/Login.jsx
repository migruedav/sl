import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import style from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else if (data.user && data.user.email) {
      navigate("/TopPosts");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>LOGIN</h1>
            <p>Email</p>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className={style.button}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
