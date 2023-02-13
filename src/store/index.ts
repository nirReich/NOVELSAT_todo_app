import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import appUtils from "../utils";

const initialState: State = {
  taskItems: [
    {
      title: "Adding a task",
      description: "Add a new task to your list!",
      id: "sfdfd2334",
      finished: false,
    },
  ],
  finishedTasks: [],
  openModal: false,
  openWarningPopper: false,
};

//-----slices-----//
const taskItemsSlice = createSlice({
  name: "taskItemsSlice",
  initialState,
  reducers: {
    addTask(state: State, action: { payload: TodoItem }): void {
      action.payload.description = appUtils.trimString(action.payload.description)
      action.payload.id = appUtils.createUniqueKey();
      action.payload.finished = false;
      state.taskItems.push(action.payload);
    },
    addFinishedTask(state: State, action: { payload: string }): void {
      const task: TodoItem | undefined = state.taskItems.find(
        (element) => element.id === action.payload
      );
      if (task && Object.keys(task).length) {
        const newTaskList = state.taskItems.filter((task) => {
          return task.id !== action.payload;
        });

        state.taskItems = newTaskList;
        task.finished = true;
        state.finishedTasks.push(task);
      }
    },
    removeTask(state: State, action: { payload: string }): void {
      state.finishedTasks = state.finishedTasks.filter((task) => {
        return task.id !== action.payload;
      });
    },
    OpenModal(state: State, action: { payload: boolean }): void {
      state.openModal = action.payload;
    },
  },
});

export const taskActions = taskItemsSlice.actions;

const store = configureStore({
  reducer: taskItemsSlice.reducer,
});

export default store;
