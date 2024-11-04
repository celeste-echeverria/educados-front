import React, { useState } from 'react';
import './sign-in.css';
import { useRouter } from 'next/navigation'; 


export default function Login() {
  const router = useRouter(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticación o manejo de login
    router.push('/'); // Redirige a la página deseada después de "iniciar sesión"

  };

  return (
    <div className="container-login">
      <h1 className="main-title">Educados</h1> {/* Título principal */}
      <p className="slogan">Transformando la forma en que aprendemos y enseñamos</p> {/* Eslogan debajo del título */}

      <div className="login-card">
        <h2 className="login-title">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            className="input-field"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
        <a href="#" className="footer-link">¿Olvidaste tu contraseña?</a>
        <a href="/sign-up" className="footer-link">¿Aun no tienes una cuenta? Registrate</a>
      </div>
    </div>
  );
}
