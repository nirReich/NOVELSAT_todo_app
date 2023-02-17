import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Styled from "./Modal.style";
import CloseIcon from "@mui/icons-material/Close";
import { taskActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid black",
  boxShadow: 24,
  p: 4,
};

type Props = {
  children: React.ReactNode;
};

export default function BasicModal({ children }: Props) {
  const openModal = useSelector((state: State) => state.openModal);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        open={openModal}
        onClose={() => dispatch(taskActions.OpenModal(false))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Styled.modal}>
          <Styled.ModalContainer>
          <Button onClick={() => dispatch(taskActions.OpenModal(false))} sx={{}}>
            <CloseIcon />
          </Button>
          </Styled.ModalContainer>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {children}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
