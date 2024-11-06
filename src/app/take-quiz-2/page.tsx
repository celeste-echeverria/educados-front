"use client";
import { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function TakeQuiz() {
  const questions: Question[] = [
    {
      question: "¿Qué es una dirección IP?",
      options: [
        "Un protocolo de encriptación",
        "Un tipo de red",
        "Una dirección única para identificar dispositivos en una red",
        "Un sistema operativo de red"
      ],
      correctAnswer: "Una dirección única para identificar dispositivos en una red",
    },
    {
      question: "¿Cuál es la función principal de un router?",
      options: [
        "Almacenar datos",
        "Gestionar archivos",
        "Conectar diferentes redes entre sí",
        "Proteger el sistema operativo"
      ],
      correctAnswer: "Conectar diferentes redes entre sí",
    },
    {
      question: "¿Qué protocolo se usa comúnmente para enviar correos electrónicos?",
      options: [
        "HTTP",
        "FTP",
        "SMTP",
        "IP"
      ],
      correctAnswer: "SMTP",
    },
    {
      question: "¿Qué significa DNS?",
      options: [
        "Domain Network System",
        "Domain Name System",
        "Data Node Server",
        "Direct Network Service"
      ],
      correctAnswer: "Domain Name System",
    },
    {
      question: "¿Cuál de estos es un protocolo seguro para transferir datos en la web?",
      options: [
        "HTTP",
        "FTP",
        "HTTPS",
        "POP"
      ],
      correctAnswer: "HTTPS",
    },
  ];

  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill("")); // Estado de respuestas
  const [submitted, setSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ correct: boolean | null; correctAnswer?: string }>({
    correct: null,
    correctAnswer: undefined,
  });

  const handleAnswerChange = (value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = value;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (feedback.correct === null) {
      const isCorrect = answers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;
      setFeedback({
        correct: isCorrect,
        correctAnswer: questions[currentQuestionIndex].correctAnswer,
      });
    } else {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setFeedback({ correct: null, correctAnswer: undefined });
      } else {
        setSubmitted(true);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex items-center justify-center flex-grow bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Responde el Quiz</h2>

          {/* Feedback Icon with Text */}
          {feedback.correct !== null && (
            <div className="flex items-center justify-center mb-4">
              {feedback.correct ? (
                <>
                  <AiOutlineCheckCircle className="h-8 w-8 text-green-500 animate-bounce mr-2" />
                  <p className="text-green-500">¡Correcto!</p>
                </>
              ) : (
                <>
                  <AiOutlineCloseCircle className="h-8 w-8 text-red-500 animate-bounce mr-2" />
                  <p className="text-red-500">Incorrecto. La respuesta correcta era: {feedback.correctAnswer}</p>
                </>
              )}
            </div>
          )}

          {questions.length > 0 && currentQuestionIndex < questions.length ? (
            <div className="mb-6">
              <p className="text-lg font-medium mb-4">{questions[currentQuestionIndex].question}</p>
              <ol className="list-decimal pl-5 mb-4">
                {questions[currentQuestionIndex].options.map((option, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <label className="text-lg">
                      <input
                        type="radio"
                        name={`question-${currentQuestionIndex}`}
                        value={option}
                        checked={answers[currentQuestionIndex] === option}
                        onChange={() => handleAnswerChange(option)}
                        className="mr-2 text-blue-500 focus:ring-blue-500"
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ol>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleNext}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  {currentQuestionIndex < questions.length - 1 ? "Siguiente" : "Enviar"}
                </button>
              </div>
            </div>
          ) : (
            <p>No hay preguntas disponibles para este quiz.</p>
          )}
          
          {submitted && <p className="text-green-500 mt-4 text-center">Respuestas enviadas correctamente.</p>}
        </div>
      </div>

      <Footer />
    </div>
  );
}
