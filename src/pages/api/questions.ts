import { NextApiRequest, NextApiResponse } from "next";

let questions = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["París", "Londres", "Roma", "Madrid"],
    correctAnswer: "París",
  },
  {
    question: "¿Qué es la fotosíntesis?",
    options: [
      "Un proceso de respiración en plantas",
      "Un proceso de conversión de luz solar en energía",
      "Un tipo de reproducción asexual",
      "Un ciclo de vida de las plantas",
    ],
    correctAnswer: "Un proceso de conversión de luz solar en energía",
  },
  {
    question: "¿Quién escribió 'Cien años de soledad'?",
    options: ["Jorge Luis Borges", "Gabriel García Márquez", "Pablo Neruda", "Julio Cortázar"],
    correctAnswer: "Gabriel García Márquez",
  },
  {
    question: "¿Cuál es el océano más grande del mundo?",
    options: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"],
    correctAnswer: "Océano Pacífico",
  },
  {
    question: "¿Qué gas es esencial para la respiración de los seres humanos?",
    options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Helio"],
    correctAnswer: "Oxígeno",
  },
  {
    question: "¿En qué año llegó el hombre a la Luna?",
    options: ["1965", "1969", "1971", "1975"],
    correctAnswer: "1969",
  },
  {
    question: "¿Qué elemento químico tiene el símbolo 'O'?",
    options: ["Oro", "Oxígeno", "Plomo", "Ozono"],
    correctAnswer: "Oxígeno",
  },
  {
    question: "¿Cuál es el continente más poblado?",
    options: ["África", "Asia", "Europa", "América"],
    correctAnswer: "Asia",
  },
  {
    question: "¿Qué instrumento se utiliza para medir la temperatura?",
    options: ["Barómetro", "Termómetro", "Higrómetro", "Anemómetro"],
    correctAnswer: "Termómetro",
  },
  {
    question: "¿Cuál es el planeta más cercano al sol?",
    options: ["Venus", "Marte", "Mercurio", "Tierra"],
    correctAnswer: "Mercurio",
  },
];


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const newQuestion = req.body;
    questions.push(newQuestion);
    return res.status(201).json({ message: "Pregunta agregada" });
  } else if (req.method === "GET") {
    return res.status(200).json(questions);
  }
}