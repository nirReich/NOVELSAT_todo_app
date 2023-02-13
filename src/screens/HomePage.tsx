import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TaskCard from "../components/card/TaskCard";
import GridBox from "../layout/gridBox/GridBox";
import AddTaskIcon from '@mui/icons-material/AddTask';
import FilterBox from "../layout/filterBox/FilterBox";

const HomePage = () => {
  const taskItems:TodoItem[] = useSelector((state: State) => state.taskItems);
  const [tasksToShow,setTasksToShow] = useState<TodoItem[]>(taskItems)
  useEffect(() => {
    setTasksToShow(taskItems)
  }, [taskItems])
  

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

  const filterTaskArray = ( string:string)=>{
    
    let filteredList = [...taskItems]
    if (string.length){
      filteredList = filteredList.filter((item)=>{
        return item.title.toLowerCase().includes(string.toLowerCase());
      });
    }
    setTasksToShow(filteredList)
  };

  return (
    <>
      <FilterBox filter = {filterTaskArray}/>
      <GridBox>{renderTodosCards(tasksToShow)}</GridBox>
    </>
  );
};

export default React.memo(HomePage);
