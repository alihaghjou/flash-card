import React, { useState } from "react";
import type { cardsType } from "../../types/Types";
import Image from "next/image";

const EachQuestionDisplay = ({ OneCard }: { OneCard: cardsType }) => {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <article className="flex gap-20 my-10">
        <button
          disabled={index == 0 ? true : false}
          onClick={() => {
            setShowAnswer(false);
            setIndex(index - 1);
          }}
        >
          <Image
            src="/PreviousPage.svg"
            alt="Previous"
            width="50"
            height="50"
          />
        </button>
        <section>
          <p className="text-2xl">{OneCard.questions[index].questionBody}</p>
          <button
            onClick={() => setShowAnswer(true)}
            className="text-blue-700 mt-4 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Show Answer
          </button>
          {showAnswer && (
            <p className="text-xl">{OneCard.questions[index].answer}</p>
          )}
        </section>
        <button
          disabled={index + 1 == OneCard.questions.length ? true : false}
          onClick={() => {
            setShowAnswer(false);
            setIndex(index + 1);
          }}
        >
          <Image src="/NextPage.svg" alt="Next" width="50" height="50" />
        </button>
      </article>
    </>
  );
};

export default EachQuestionDisplay;
