export type NewsType = {
  id: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  date: string;
  title: string;
  body: string;
};

export type QuestionType = {
  id: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  class: string;
  question: string;
  req: string;
};

export type EvaluationType = {
  id: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  age: [];
  sex: [];
  address: [];
  date: string;
  objective: string;
  star: number;
  comment: string;
  avator: {
    url: string;
    height: number;
    width: number;
  };
};
