import React from "react";
import { UseFormRegister } from "react-hook-form";
import type { inputQuestionType } from "../../types/InputTypes";

const QuestionInputField = ({
  register,
  text,
}: {
  register: UseFormRegister<inputQuestionType>;
  text: "Question" | "Answer";
}) => {
  return (
    <div className="w-full text-left">
      <label
        htmlFor={text}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {text}
      </label>
      <textarea
        {...register(text, { required: true })}
        id={text}
        rows={5}
        className="block p-2.5 w-full text-sm bg-gray-700 rounded-lg border focus:ring-blue-500 focus:border-blue-500 focus-visible:ring-blue-500 focus-visible:border-blue-500 placeholder-gray-400 text-white border-gray-600"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
};

export default QuestionInputField;
