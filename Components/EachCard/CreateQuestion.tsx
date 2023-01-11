import React, { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import QuestionInputField from "./QuestionInputField";
import { cardsType } from "../../pages/_app";

export type inputQuestionType = {
  Question: string;
  Answer: string;
};

const CreateQuestion = ({
  cardsData,
  setCardsData,
  OneCard,
}: {
  cardsData: cardsType[];
  setCardsData: React.Dispatch<SetStateAction<cardsType[]>>;
  OneCard: cardsType;
}) => {
  const { register, handleSubmit, reset } = useForm<inputQuestionType>();
  const [modalOpen, setModalOpen] = useState(false);

  function onSubmit(data: inputQuestionType) {
    const position = cardsData.indexOf(OneCard);
    const tempQuestion = OneCard.questions;
    tempQuestion.push({
      questionId:
        OneCard.questions.length !== 0
          ? OneCard.questions[OneCard.questions.length - 1].questionId + 1
          : "1",
      questionBody: data.Question,
      answer: data.Answer,
    });
    const tempCard: cardsType = {
      id: OneCard.id,
      title: OneCard.title,
      description: OneCard.description,
      questions: tempQuestion,
    };
    cardsData.splice(position, 1, tempCard);
    reset();
    setModalOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 focus:outline-none"
      >
        Create Question
      </button>
      {modalOpen && (
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="fixed backdrop-blur-lg top-0 left-0 right-0 z-50 p-4 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        >
          <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md md:h-auto">
            <div className="relative bg-gray-700 rounded-lg shadow ">
              <button
                onClick={() => setModalOpen(false)}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-hide="authentication-modal"
              >
                <Image src="/Close.svg" alt="Close" width="20" height="20" />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-white">
                  Create Your Question
                </h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-6 justify-center items-center"
                >
                  <QuestionInputField register={register} text={"Question"} />
                  <QuestionInputField register={register} text={"Answer"} />
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateQuestion;
