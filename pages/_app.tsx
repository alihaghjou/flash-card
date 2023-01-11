import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const initialData = [
  {
    id: "id1",
    title: "card1",
    description: "description test 1",
    numberOfQuestions: 20,
    questions: [
      {
        questionId: "Qid1",
        questionBody: "what is question?",
        answer: "this is the answer",
      },
      {
        questionId: "Qid2",
        questionBody: "what is second question?",
        answer: "this is not the answer",
      },
    ],
  },
  {
    id: "id2",
    title: "card2",
    description: "description test 2",
    numberOfQuestions: 30,
    questions: [
      {
        questionId: "Qid1",
        questionBody: "what is question?",
        answer: "this is the answer",
      },
    ],
  },
];

export type cardsType = {
  id: string;
  title: string;
  description: string;
  questions: questionType[];
};

type questionType = {
  questionId: string;
  questionBody: string;
  answer: string;
};

export default function App({ Component, pageProps }: AppProps) {
  const [cardsData, setCardsData] = useState<cardsType[]>(initialData);

  return (
    <Component
      {...pageProps}
      cardsData={cardsData}
      setCardsData={setCardsData}
    />
  );
}
