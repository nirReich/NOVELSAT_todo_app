import styled from "styled-components";
import appUtils from "../../utils";

const Form = styled.div`
  position: relative;
  bottom: 1.5rem;
  color: black;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 5px;
`;
const FormInput = {
  width: "70%",
  background: appUtils.colors.ivoryWhite,
  borderRadius: "5px",
};

const FormButton = styled.button`
  position: relative;
  left: 10%;
  background: ${appUtils.colors.bluePrimary};
  color: ${appUtils.colors.ivoryWhite};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  width: 80%;
  margin-top: 5%;
`;

const FormTitle = styled.h2`
  color: ${appUtils.colors.darkBlue};
`;

const FormSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormInstructions = styled.div<{ isError: boolean }>`
  text-align: center;
  height: unset;
  font-size: small;
  color: ${(props) =>
    props.isError ? appUtils.colors.darkRed : appUtils.colors.darkBlue};
`;

const Styled = {
  Form,
  FormInput,
  FormButton,
  FormTitle,
  FormSection,
  FormInstructions,
};
export default Styled;
