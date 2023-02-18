import styled from "styled-components";
import appUtils from "../../utils";

const ModalContainer = styled.div`
  margin-bottom: 1.7rem;
`;

const Styled = {
  modal: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: appUtils.colors.greyWhite,
    border: `3px solid ${appUtils.colors.bluePrimary}`,
    borderRadius: "0.5rem",
    boxShadow: 24,
    p: 2.5,
  },
  ModalContainer,
};

export default Styled;
