import appUtils from "../../utils";

const Styled = {
  modal: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: appUtils.colors.lightGrey,
    border: `2px solid ${appUtils.colors.bluePrimary}` ,
    borderRadius:'0.5rem',
    boxShadow: 24,
    p: 4
  },
};

export default Styled;
