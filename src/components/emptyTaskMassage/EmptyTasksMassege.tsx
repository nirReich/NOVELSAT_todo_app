import AddTaskIcon from "@mui/icons-material/AddTask";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import Styled from "./EmptyTaskMassage.style";

type Props = {
  type: string;
};

const EmptyTasksMassage = ({ type }: Props) => {
  const renderMassage = () => {
    if (type === "tasks") {
      return (
        <Styled.MassageContainer>
          <AddTaskIcon fontSize="large" />
          <h2>No Todo tasks in your list</h2>
          <h2> Try to add some!</h2>
        </Styled.MassageContainer>
      );
    } else {
      return (
        <Styled.MassageContainer>
          <RemoveDoneIcon fontSize="large" />
          <h2>No finished Tasks yet</h2>
          <h2> Get to work!</h2>
        </Styled.MassageContainer>
      );
    }
    <div></div>;
  };
  return <>{renderMassage()}</>;
};

export default EmptyTasksMassage;
