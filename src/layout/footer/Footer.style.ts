import styled from "styled-components";
import appUtils from "../../utils";

const FooterBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${appUtils.colors.bluePrimary};
  color: white;
  text-align: center;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
`;
const FooterContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
`;
const NameLable = styled.div`
  color: ${appUtils.colors.ivoryWhite};
  font-weight: 700;
  background-color: ${appUtils.colors.warmOrange};
  padding: 0 5px 0 5px;
  border-radius: 1rem;
  color: ${appUtils.colors.darkBlue};
  margin-left: 1rem;
  &:hover {
    color: ${appUtils.colors.ivoryWhite};
    border: ${appUtils.colors.darkBlue};
  }
`;

const FooterLink = styled.a`
  &:link {
    color: ${appUtils.colors.ivoryWhite};
  }
  &:visited {
    color: ${appUtils.colors.ivoryWhite};
  }
  &:hover {
    color: ${appUtils.colors.warmOrange};
  }
  &:active {
    color: ${appUtils.colors.warmOrange};
  }
`;

const Styled = {
  FooterBody,
  NameLabel: NameLable,
  FooterContainer,
  FooterLink,
};
export default Styled;
