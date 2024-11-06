"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import React from 'react';

const quizzes = [
  { id: 1, title: 'Conceptos Básicos de Programación', description: 'Pon a prueba tus habilidades de lógica y programación.' },
  { id: 2, title: 'Fundamentos de Redes', description: 'Descubre cuánto sabes sobre redes informáticas.' },
  { id: 3, title: 'Seguridad Informática', description: 'Cuestionario de ciberseguridad.' },
];

const Quizzes = () => {
    const router = useRouter(); 

    const handleClick = (id: number) => {
        router.push(`/take-quiz-${id}`);
    };
    
  return (
    <div className="flex flex-col min-h-screen bg-white">
        {/* Navbar */}
        <Navbar showViewToggle={false}/>
     
        <div className="flex flex-col items-center justify-center flex-grow">
            <h1 className="text-3xl font-bold text-blue-600 mb-8">Quizzes Disponibles</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {quizzes.map((quiz) => (
                    <div key={quiz.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-100 flex flex-col">
                        <div className="px-6 py-4 flex-grow">
                            <div className="font-bold text-xl mb-2 text-blue-600">{quiz.title}</div>
                            <p className="text-gray-700 text-base">{quiz.description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2 flex justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => handleClick(quiz.id)}>
                                Comenzar
                            </button>
                        </div>
                    </div>
                ))}
             </div>
        </div>


        {/* Footer */}
        <Footer />
    </div>
  );
};

export default Quizzes;
