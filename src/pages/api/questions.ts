import { NextApiRequest, NextApiResponse } from "next";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface Quiz {
  [key: string]: Question[];
}

let quizzes: Quiz = {
  "1": [
    {
      question: "¿Qué significa 'bug' en programación?",
      options: [
        "Un error en el código",
        "Una herramienta de depuración",
        "Una función de software",
        "Una variable no inicializada"
      ],
      correctAnswer: "Un error en el código",
    },
    {
      question: "¿Cuál es el resultado de 5 + 2 * 3 en la mayoría de los lenguajes de programación?",
      options: [
        "21",
        "16",
        "11",
        "13"
      ],
      correctAnswer: "11",
    },
    {
      question: "¿Cuál de las siguientes es una estructura de control de flujo?",
      options: [
        "Variable",
        "Clase",
        "If-else",
        "Librería"
      ],
      correctAnswer: "If-else",
    },
    {
      question: "¿Qué palabra clave se usa para declarar una constante en JavaScript?",
      options: [
        "var",
        "const",
        "let",
        "static"
      ],
      correctAnswer: "const",
    },
    {
      question: "¿Qué es un array?",
      options: [
        "Un tipo de bucle",
        "Una lista ordenada de elementos",
        "Una variable de texto",
        "Un sistema operativo"
      ],
      correctAnswer: "Una lista ordenada de elementos",
    },
  ]}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const newQuestion: Question = req.body; // Se espera que el cuerpo de la solicitud contenga una nueva pregunta
    // Agregar la nueva pregunta a la colección correspondiente según la lógica que determines
    return res.status(201).json({ message: "Pregunta agregada" });
  } else {
    return res.status(405).json({ message: "Método no permitido" }); // Manejo de otros métodos no permitidos
  }
}
