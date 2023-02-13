import styled from "styled-components";
import { Link } from "react-router-dom";
import appUtils from "../../utils";

const Img = styled.img`
  width: 200px;
  height: 90px;
  margin: 1rem;
`;

const AddTaskButton = styled.button`
  background: ${appUtils.colors.warmOrange};
  width: 9rem;
  height: 3rem;
  font-weight: 800;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  border: none;
`;

const NavbarLink = styled(Link)`
  color: ${appUtils.colors.ivoryWhite};
  &:hover {
    color: ${appUtils.colors.warmOrange};
  }
`;
const BtnContainer = styled.div`
  margin-left: 25%;
`;

const Styled = {
  Img,
  AddTaskButton,
  NavbarLink,
  BtnContainer,
};
export default Styled;
