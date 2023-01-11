import React, { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import type { cards } from "../pages";
import InputField from "./InputField";
import Image from "next/image";

export type inputFormType = {
  Card_Title: string;
  Description: string;
};

const CreateCard = ({
  cardsData,
  setCardsData,
}: {
  cardsData: cards[];
  setCardsData: React.Dispatch<SetStateAction<cards[]>>;
}) => {
  const { register, handleSubmit, reset } = useForm<inputFormType>();
  const [modalOpen, setModalOpen] = useState(false);

  function onSubmit(data: inputFormType) {
    reset();
    setCardsData([
      ...cardsData,
      {
        id: cardsData[cardsData.length - 1].id + 1,
        title: data.Card_Title,
        description: data.Description,
        questions: [],
      },
    ]);
    setModalOpen(false);
  }
  return (
    <>
      <div className="flex justify-center">
        <button
          className="border focus:outline-none focus:ring-4 font-medium rounded-lg text-2xl px-7 py-5 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
          onClick={() => setModalOpen(true)}
        >
          Add A New Card
        </button>
      </div>
      {modalOpen && (
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="fixed backdrop-blur-lg top-0 left-0 right-0 z-50 p-4 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        >
          <div className="relative top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md md:h-auto">
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
                  Sign in to our platform
                </h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-6 justify-center items-center"
                >
                  <InputField register={register} text={"Card_Title"} />
                  <InputField register={register} text={"Description"} />
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

export default CreateCard;
