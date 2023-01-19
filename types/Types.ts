export type cardsType = {
    id: string;
    title: string;
    description: string;
    questions: questionType[];
  };
  
  export type questionType = {
    questionId: string;
    questionBody: string;
    answer: string;
  };