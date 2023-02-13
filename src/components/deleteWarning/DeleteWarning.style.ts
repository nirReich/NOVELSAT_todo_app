import styled from "styled-components";
import appUtils from "../../utils";

const WarningBox = styled.div`
  text-align: center;
  display: inline;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h4`
  color: ${appUtils.colors.darkBlue};
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  
`;

const Styled = {
  WarningBox,
  Title,
  ButtonContainer,
};
export default Styled;
