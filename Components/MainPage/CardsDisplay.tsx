import React from "react";
import Link from "next/link";
import type { cardsType } from "../../pages/_app";
import Image from "next/image";

const CardsDisplay = ({ cardsData }: { cardsData: cardsType[] }) => {
  return (
    <section className="flex flex-row gap-8 justify-center mb-4 flex-wrap">
      {cardsData.map((EachCard) => (
        <div
          key={EachCard.id}
          className="max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {EachCard.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Number Of Questions:{" "}
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              {EachCard.questions.length}
            </span>
          </p>
          <Link
            href={`/Cards/${EachCard.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <Image
              className="ml-2"
              src="/Arrow.svg"
              alt="arrow"
              width="16"
              height="16"
            />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default CardsDisplay;
