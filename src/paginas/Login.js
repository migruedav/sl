import React from 'react';
import LoginForm from '../components/LoginForm';
import { supabase } from '../supabase'

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm/>
    </div>
  );
}

export default Login;
