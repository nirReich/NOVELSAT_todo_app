import React, { useState } from "react";
import Popper from "@mui/material/Popper";
import Button from "../button/Button";
import PopperBox from "./PopperBox";
import { taskActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  title: string;
};

const PopperButton = ({ children, title }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const popperCloseHandler = ()=>{
    setAnchorEl(null)
  }

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick} title={title}/>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <PopperBox popperCloseHandler={popperCloseHandler}>
          
          {children}
        </PopperBox>
      </Popper>
    </div>
  );
};

export default PopperButton;
