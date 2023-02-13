import styled from "styled-components";
import appUtils from "../../utils";

const Form = styled.div`
  position: relative;
  bottom: 1.5rem;
  text-align: center;
  color: black;
  border-radius: 5px;
`;
const FormInput = { width: "75%", background: appUtils.colors.ivoryWhite, borderRadius:'5px' };

const FormButton = styled.button`
  background: ${appUtils.colors.bluePrimary};
  margin-top: 1rem;
  color: ${appUtils.colors.ivoryWhite};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  border: none;
`;

const FormTitle = styled.h2`
  color: ${appUtils.colors.darkBlue};
`;

const FormSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormInstructions = styled.div<{isError:boolean}>`
  text-align: center;
  height: unset;
  font-size: small;
  color: ${props=>props.isError? appUtils.colors.darkRed : appUtils.colors.darkBlue};
`

const Styled = {
  Form,
  FormInput,
  FormButton,
  FormTitle,
  FormSection,
  FormInstructions
};
export default Styled;
