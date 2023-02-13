import { useSelector } from "react-redux";
import TaskCard from "../components/card/TaskCard";
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import GridBox from "../layout/gridBox/GridBox";

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
        <div>
          <RemoveDoneIcon fontSize="large"/>
          <h2>No finished Tasks yet</h2>
          <h2> Get to work!</h2>
        </div>
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
