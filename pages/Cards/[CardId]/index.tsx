import { useRouter } from "next/router";
import React, { SetStateAction, useState } from "react";
import EachCardQuestions from "../../../Components/EachCard/EachCardQuestions";
import CreateQuestion from "../../../Components/EachCard/CreateQuestion";
import Link from "next/link";
import Image from "next/image";
import type { cardsType } from "../../../types/Types";
import EachPageHead from "../../../Components/EachPageHead";

//Todo: when user isn't logged in use localhost and if logged use database
//TODO: add auth to project than add prisma and mongodb to project
//todo: user can edit their card and each question 

const Index = ({
  cardsData,
  setCardsData,
}: {
  cardsData: cardsType[];
  setCardsData: React.Dispatch<SetStateAction<cardsType[]>>;
}) => {
  const [startQuestions, setStartQuestions] = useState(false);

  const router = useRouter();
  const pageId = router.query.CardId;

  const OneCard = cardsData.filter((cards) => cards.id === pageId)[0];

  return (
    <>
      <EachPageHead PageTitle={OneCard.title} />
      <article className="text-center flex flex-col items-center justify-center">
        <Link href="../../" className="fixed top-1/2 left-4 ">
          <Image src="/HomeIcon.svg" alt="Home" width={24} height={24} />
        </Link>
        <div className="border-b-2 w-2/3 border-b-slate-500 pb-4 mb-6 flex flex-col justify-center items-center">
          <p className="mb-4 pb-4  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {OneCard.title}
          </p>
          <p className="text-lg mb-2 pb-2 font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
            Number of Questions:{" "}
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              {OneCard.questions.length}
            </span>
          </p>
          <p className="   text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            {OneCard.description}
          </p>
        </div>
        <div className="flex gap-8">
          {OneCard.questions.length > 0 ? (
            <EachCardQuestions
              OneCard={OneCard}
              startQuestions={startQuestions}
              setStartQuestions={setStartQuestions}
            />
          ) : null}
          {!startQuestions && (
            <CreateQuestion
              cardsData={cardsData}
              setCardsData={setCardsData}
              OneCard={OneCard}
            />
          )}
        </div>
      </article>
    </>
  );
};

export default Index;
