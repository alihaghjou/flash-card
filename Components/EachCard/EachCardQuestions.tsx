import React, { SetStateAction } from "react";
import EachQuestionDisplay from "./EachQuestionDisplay";
import type { cardsType } from "../../types/Types";

const EachCardQuestions = ({
  OneCard,
  startQuestions,
  setStartQuestions,
}: {
  OneCard: cardsType;
  startQuestions: boolean;
  setStartQuestions: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div>
      {startQuestions ? (
        <>
          <EachQuestionDisplay OneCard={OneCard} />
          <button
            className="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            onClick={() => setStartQuestions(false)}
          >
            Quit
          </button>
        </>
      ) : (
        <button
          onClick={() => setStartQuestions(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 focus:outline-none"
        >
          Start Questions
        </button>
      )}
    </div>
  );
};

export default EachCardQuestions;
