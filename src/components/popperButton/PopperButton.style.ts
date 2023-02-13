import styled from "styled-components";
import appUtils from "../../utils";

const PopperButton = styled.button`
  background: ${appUtils.colors.greyWhite};
  color: ${appUtils.colors.bluePrimary};
  padding: 0.4rem 1rem;
  border-radius: 20px;
  cursor: pointer;
`;
const PopperBox = styled.div`
  margin-top: 0.2rem;
  padding: 0.5rem;
  width: 18rem;
  height: 7rem;
  background-color: ${appUtils.colors.lightGrey};
  border: 1.5px solid ${appUtils.colors.darkRed};
  border-radius: 5px;

`;

const Styled = {
  PopperButton,
  PopperBox,
};
export default Styled;
