// This is file is just a replacement for database

type Task = {
  id: number;
  title: string;
  project: string | null;
};

export let model: Task[] = [
  {
    id: 1,
    title: "Do the thing",
    project: "Casual",
  },
  {
    id: 2,
    title: "Hey you",
    project: null,
  },
];

export const setModel = (arr: Task[]) => (model = arr);
