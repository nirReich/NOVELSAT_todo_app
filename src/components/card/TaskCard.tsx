import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../store";
import Button from "../button/Button";
import DeleteWarning from "../deleteWarning/DeleteWarning";
import PopperButton from "../popperButton/PopperButton";
import Styled from "./TaskCard.style";

type Props = {
  description: string;
  task: TodoItem;
  title:string
};

const TaskCard = ({ description, task, title }: Props) => {
  const dispatch = useDispatch();
  const renderBtn = () => {
    return task.finished ? (
      <PopperButton
        title="Delete"
      >
       <DeleteWarning task={task}/>
      </PopperButton>
    ) : (
      <Button
        title="Done!"
        onClick={() => {
          dispatch(taskActions.addFinishedTask(task.id));
        }}
      />
    );
  };
  return (
    <>
      <Styled.TaskCard>
        <Styled.CardTitle isFinished = {task.finished}>{title}</Styled.CardTitle>
        <Styled.CardDescription isFinished = {task.finished}>{description}</Styled.CardDescription>
        {renderBtn()}
      </Styled.TaskCard>
    </>
  );
};

export default TaskCard;
