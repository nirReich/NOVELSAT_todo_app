import { useSelector } from "react-redux";
import TaskCard from "../components/card/TaskCard";
import GridBox from "../layout/gridBox/GridBox";
import EmptyTasksMassage from "../components/EmptyTasksMassege";


const Finished = () => {
  const finishedTasks = useSelector((state: State) => state.finishedTasks);
  const renderFinishedTasks = (taskList: TodoItem[]) => {
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
        <EmptyTasksMassage type ="finished"/>
      );
    }
  };
  return (
    <>
      <GridBox>{renderFinishedTasks(finishedTasks)}</GridBox>
    </>
  );
};

export default Finished;
