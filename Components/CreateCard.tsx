import React, { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import type { cards } from "../pages";

type inputTitle = {
  card_title: string;
};

const CreateCard = ({
  cardsData,
  setCardsData,
}: {
  cardsData: cards[];
  setCardsData: React.Dispatch<SetStateAction<cards[]>>;
}) => {
  const { register, handleSubmit, reset } = useForm<inputTitle>();

  function onSubmit(data: inputTitle) {
    console.log(data);
    reset();
    setCardsData([
      ...cardsData,
      {
        id: cardsData[cardsData.length - 1].id + 1,
        title: data.card_title,
        description: "test description",
        numberOfQuestions: 12,
        questions: [],
      },
    ]);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-row gap-4 justify-center items-center"
    >
      <div className="relative z-0 w-5/12">
        <input
          {...register("card_title", { required: true })}
          type="text"
          id="floating_standard"
          className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_standard"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Floating standard
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateCard;
