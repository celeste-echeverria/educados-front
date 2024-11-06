"use client";
import Link from 'next/link';
import { useView } from '../app/context/view-context';

export default function Navbar({ showViewToggle }: { showViewToggle?: boolean }) {
  const { view, toggleView } = useView();

  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold cursor-pointer transition duration-200 hover:text-gray-200">
          <Link href="/">Educados</Link>
        </h1>
        {showViewToggle && <button 
          onClick={toggleView} 
          className="bg-gray-800 text-white px-4 py-2 rounded-md transition duration-200 hover:bg-gray-700"
        >
          Cambiar a vista de {view === 'student' ? 'Profesor' : 'Estudiante'}
        </button>}
      </nav>
    </header>
  );
}
