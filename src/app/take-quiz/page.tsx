"use client";
import { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'; // Importar íconos de React Icons
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
 
interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function TakeQuiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ correct: boolean | null; correctAnswer?: string }>({
    correct: null,
    correctAnswer: undefined,
  });

  useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch("/api/questions");
      const data = await response.json();
      setQuestions(data);
      setAnswers(Array(data.length).fill(""));
    }
    fetchQuestions();
  }, []);

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
        correctAnswer: questions[currentQuestionIndex].correctAnswer, // Store the correct answer
      });
    } else {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setFeedback({ correct: null, correctAnswer: undefined }); // Reset feedback for next question
      } else {
        setSubmitted(true);
      }
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    console.log("Respuestas enviadas:", answers);
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
              {/* Botón centrado */}
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
            <p>Cargando preguntas...</p>
          )}
          {submitted && <p className="text-green-500 mt-4 text-center">Respuestas enviadas correctamente.</p>}
        </div>
      </div>

      <Footer />
    </div>
  );
}
