import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TaskCard from "../components/card/TaskCard";
import GridBox from "../layout/gridBox/GridBox";
import FilterBox from "../layout/filterBox/FilterBox";
import EmptyTasksMassage from "../components/emptyTaskMassage/EmptyTasksMassege";
import {debounce} from "lodash";

const HomePage = () => {
  const taskItems: TodoItem[] = useSelector((state: State) => state.taskItems);
  const [tasksToShow, setTasksToShow] = useState<TodoItem[]>(taskItems);
  useEffect(() => {
    setTasksToShow(taskItems);
  }, [taskItems]);

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
        <EmptyTasksMassage type="tasks"/>
      );
    }
  };

  const filterTaskArray = debounce((string: string)=>{
    let filteredList = [...taskItems];
   
    if (string.length) {
      filteredList = filteredList.filter((item) => {
        return item.title.toLowerCase().includes(string.toLowerCase());
      });
    }
    setTasksToShow(filteredList);
  },500)
  
  

  return (
    <>
      <FilterBox filter={filterTaskArray} />
      <GridBox>{renderTodosCards(tasksToShow)}</GridBox>
    </>
  );
};

export default React.memo(HomePage);
