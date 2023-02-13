import styled from "styled-components";
import appUtils from "../../utils";

const Button = styled.button<{ danger: boolean }>`
  background: ${(props) =>
    props.danger ? appUtils.colors.dangerRed : appUtils.colors.greyWhite};
  color: ${(props) =>
    props.danger ? appUtils.colors.ivoryWhite : appUtils.colors.bluePrimary};
  padding: 0.4rem 1rem;
  border-radius: 20px;
  cursor: pointer;
`;

const Styled = {
  Button,
};
export default Styled;
