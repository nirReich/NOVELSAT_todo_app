import { style } from "@mui/system";
import React from "react";
import appUtils from "../../utils";
import Styled from "./Button.style";

type Props = {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  danger?: boolean;
};

const Button = ({ title, onClick, danger = false }: Props) => {
  return (
    <Styled.Button onClick={onClick} danger={danger}>
      {title}
    </Styled.Button>
  );
};

export default Button;
