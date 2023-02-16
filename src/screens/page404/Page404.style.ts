import styled from "styled-components";
import appUtils from "../../utils";

const PageContainer = styled.div`
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

const Title = styled.p`
font-size: 5rem;
font-weight: 900;
margin-bottom: -1rem;
`
const SubTitle = styled.p`
font-size: 2rem;
font-weight: 500;
`

const DescriptionP = styled.p`
  
`
const Styled = {
  PageContainer,
  Title,
  SubTitle,
  DescriptionP
};
export default Styled;
