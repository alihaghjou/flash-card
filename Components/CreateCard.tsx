import React, { SetStateAction, useState } from "react";
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
  const [modalOpen, setModalOpen] = useState(false);

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
    setModalOpen(false);
  }
  return (
    <>
      <button onClick={() => setModalOpen(true)}>Click</button>
      {modalOpen && (
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="fixed backdrop-blur-lg top-0 left-0 right-0 z-50 p-4 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        >
          <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={() => setModalOpen(false)}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our platform
                </h3>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateCard;
