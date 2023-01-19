import { SetStateAction } from "react";
import CreateCard from "../Components/MainPage/CreateCard";
import CardsDisplay from "../Components/MainPage/CardsDisplay";
import EachPageHead from "../Components/EachPageHead";
import type { cardsType } from "../types/Types";

export default function Home({
  cardsData,
  setCardsData,
}: {
  cardsData: cardsType[];
  setCardsData: React.Dispatch<SetStateAction<cardsType[]>>;
}) {
  return (
    <>
      <EachPageHead PageTitle="Welcome" />
      <main className="flex flex-col gap-12">
        {cardsData ? (
          <CardsDisplay cardsData={cardsData} />
        ) : (
          <p className="text-center text-3xl">List is empty</p>
        )}
        <CreateCard cardsData={cardsData} setCardsData={setCardsData} />
      </main>
    </>
  );
}
