/// <reference types="vite/client" />
type TodoItem = {
    title: string;
    description:string
    id:string,
    finished:boolean
}

type State = {
    taskItems:TodoItem[];
    finishedTasks:TodoItem[];
    openModal:boolean;
    openWarningPopper:boolean
  }