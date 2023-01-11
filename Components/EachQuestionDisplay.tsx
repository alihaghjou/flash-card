import React, { useState } from "react";
import { questionType } from "../pages/_app";

const EachQuestionDisplay = ({
  EachQuestion,
}: {
  EachQuestion: questionType;
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <section className="text-lg h-screen">
      <p className="text-xl mb-4">{EachQuestion.questionBody}</p>
      <button
        onClick={() => setShowAnswer(true)}
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
      >
        Show Answer
      </button>
      {showAnswer && <p>{EachQuestion.answer}</p>}
    </section>
  );
};

export default EachQuestionDisplay;
