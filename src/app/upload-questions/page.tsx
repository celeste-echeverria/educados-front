"use client";
import { useState } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function UploadQuestions() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = async () => {
    const newQuestion = { question, options, correctAnswer };

    try {
      await fetch("/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuestion),
      });
      alert("Pregunta cargada exitosamente");
      setQuestion("");
      setOptions(["", "", "", ""]);
      setCorrectAnswer("");
    } catch (error) {
      alert("Hubo un problema al cargar la pregunta.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex items-center justify-center flex-grow bg-gray-100 py-10">
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg max-w-lg">
          <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">Cargar Pregunta de Quiz</h2>
          
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Pregunta:</label>
            <input
              type="text"
              className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Opciones:</label>
            {options.map((option, index) => (
              <input
                key={index}
                type="text"
                className="border border-gray-300 p-4 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm"
                placeholder={`Opción ${index + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
            ))}
          </div>
          
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Respuesta Correcta:</label>
            <input
              type="text"
              className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
            />
          </div>
          
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 w-full"
          >
            Cargar Pregunta
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
