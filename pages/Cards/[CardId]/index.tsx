import { useRouter } from "next/router";
import React, { SetStateAction, useState } from "react";
import type { cardsType } from "../../_app";
import EachCardQuestions from "../../../Components/EachCard/EachCardQuestions";
import CreateQuestion from "../../../Components/EachCard/CreateQuestion";
import Link from "next/link";
import Image from "next/image";

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
    <article className="text-center flex flex-col items-center justify-center">
      <Link href="../../" className="fixed top-1/2 left-4 ">
        <Image src="/HomeIcon.svg" alt="Home" width={24} height={24} />
      </Link>
      <div className="border-b-2 w-2/3 border-b-slate-500 pb-4 mb-6 flex flex-col justify-center items-center">
        <p className="mb-4 pb-4  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {OneCard.title}
        </p>
        <p className="   text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {OneCard.description}
        </p>
      </div>
      <div className="flex gap-8">
        <EachCardQuestions
          OneCard={OneCard}
          startQuestions={startQuestions}
          setStartQuestions={setStartQuestions}
        />
        {!startQuestions && (
          <CreateQuestion
            cardsData={cardsData}
            setCardsData={setCardsData}
            OneCard={OneCard}
          />
        )}
      </div>
    </article>
  );
};

export default Index;
