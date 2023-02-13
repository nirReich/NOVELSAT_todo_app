import styled from "styled-components";
import appUtils from "../../utils";

const TaskCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${appUtils.colors.taskGrey};
  padding: 0.5rem 1rem;
  margin: 0.5rem 0 0.5rem 0;
  border-radius: 5px;
`;
const CardTitle = styled.h2<{isFinished:boolean}>`
text-decoration: ${props=>props.isFinished?'line-through':'none'};
  margin-left: 1rem;
  color: ${appUtils.colors.warmOrange};
`;

const CardDescription = styled.div<{isFinished:boolean}>`
  text-decoration: ${props=>props.isFinished?'line-through':'none'};
`

const Styled = {
  TaskCard,
  CardTitle,
  CardDescription
};
export default Styled;
