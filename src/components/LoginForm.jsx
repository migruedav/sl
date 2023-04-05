import { useState } from 'react';
import { supabase } from '../supabase'; // Asegúrate de tener una instancia de Supabase creada

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      window.location.href = '/TopPosts';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
      </div>
      {errorMessage && <div>{errorMessage}</div>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
