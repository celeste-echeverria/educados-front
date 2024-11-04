"use client";

import React, { useState } from 'react';
import './sign-up.css';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="container-sign-up">
        <h1 className="main-title">Educados</h1>
        <p className="slogan">Transformando la forma en que aprendemos y enseñamos</p>

      <div className="sign-up-card">
        <h2 className="sign-up-title">Crear Cuenta</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            className="input-field"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            className="input-field"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="role-selection">
            <label className="role-label">
              <input
                type="radio"
                name="role"
                value="student"
                checked={role === 'student'}
                onChange={() => setRole('student')}
              />
              Soy Estudiante
            </label>
            <label className="role-label">
              <input
                type="radio"
                name="role"
                value="teacher"
                checked={role === 'teacher'}
                onChange={() => setRole('teacher')}
              />
              Soy Profesor
            </label>
          </div>
          <button type="submit" className="sign-up-button">
            Registrarse
          </button>
        </form>
        <a href="/sign-in" className="footer-link">¿Ya tienes una cuenta? Inicia sesión</a>
      </div>
    </div>
  );
}
