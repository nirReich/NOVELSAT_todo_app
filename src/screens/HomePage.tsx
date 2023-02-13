import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "../components/card/TaskCard";
import GridBox from "../layout/gridBox/GridBox";
import AddTaskIcon from '@mui/icons-material/AddTask';

const HomePage = () => {
  const taskItems = useSelector((state: State) => state.taskItems);

  const renderTodosCards = (taskList: TodoItem[]) => {
    if (taskList.length) {
      return taskList.map((item, i) => {
        return (
          <TaskCard
            key={item.id}
            task={item}
            title={item.title}
            description={item.description}
          />
        );
      });
    } else {
      return (
        <div>
          <AddTaskIcon fontSize="large"/>
          <h2>No Todo tasks in your list</h2>
          <h2> Try to add some!</h2>
        </div>
      );
    }
  };
  return (
    <>
      <GridBox>{renderTodosCards(taskItems)}</GridBox>
    </>
  );
};

export default React.memo(HomePage);
