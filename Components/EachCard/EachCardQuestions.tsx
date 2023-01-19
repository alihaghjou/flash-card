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
      {!startQuestions && (
        <button
          onClick={() => setStartQuestions(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 focus:outline-none"
        >
          Start Questions
        </button>
      )}
      {startQuestions && (
        <>
          {OneCard.questions.map((EachQuestion) => (
            <EachQuestionDisplay
              key={EachQuestion.questionId}
              EachQuestion={EachQuestion}
            />
          ))}
          <button
            className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            onClick={() => setStartQuestions(false)}
          >
            Quit
          </button>
        </>
      )}
    </div>
  );
};

export default EachCardQuestions;
