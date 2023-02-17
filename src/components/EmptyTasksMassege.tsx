import React from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";

type Props = {
  type: string;
};

const EmptyTasksMassage = ({ type }: Props) => {
  const renderMassage = () => {
    if (type === "tasks") {
      return (
        <div>
          <AddTaskIcon fontSize="large" />
          <h2>No Todo tasks in your list</h2>
          <h2> Try to add some!</h2>
        </div>
      );
    } else {
      return (
        <div>
          <RemoveDoneIcon fontSize="large" />
          <h2>No finished Tasks yet</h2>
          <h2> Get to work!</h2>
        </div>
      );
    }
    <div></div>;
  };
  return (
    <>
    {renderMassage()}
    </>
  );
};

export default EmptyTasksMassage;
