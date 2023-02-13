import styled from "styled-components";
import appUtils from "../../utils";

const FilterBox = styled.div`
  display: flex;
  color: ${appUtils.colors.darkBlue};
  font-weight: 700;
  justify-content: space-between;
  align-items: center;
  background: ${appUtils.colors.lightGrey};
  padding: 0.5rem 1rem;
  margin: 0.5rem auto;
  border-radius: 5px;
  border: 3px solid ${appUtils.colors.warmOrange};
  width: 25%;
`;
const FilterInput = styled.input`
  width: 60%;
  color: ${appUtils.colors.darkBlue};
  background-color: ${appUtils.colors.greyWhite};
  padding: 0.4rem;
  border-radius: 5px;
  border: none;
  &:focus {
    outline-color: ${appUtils.colors.warmOrange};
  }
`;
const Styled = {
  FilterBox,
  FilterInput,
};
export default Styled;
