import { useRouter } from "next/router";
import React from "react";
import type { cardsType } from "../../_app";

const Index = ({ cardsData }: { cardsData: cardsType[] }) => {
  const router = useRouter();
  const pageId = router.query.CardId;

  const OneCard = cardsData.filter((cards) => cards.id === pageId)[0];

  return (
    <article className="text-center flex flex-col items-center justify-center">
      <p className="mb-4 pb-4 w-2/3  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {OneCard.title}
      </p>
      <p className="mb-6 pb-4 border-b-2 border-b-slate-500 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {OneCard.description}
      </p>
      {OneCard.questions.map((EachQuestion) => (
        <div key={EachQuestion.questionId}>{EachQuestion.questionBody}</div>
      ))}
    </article>
  );
};

export default Index;
