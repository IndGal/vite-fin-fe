import { Button, Dialog } from "@mui/material";
import { Container } from "../../Controls";
import { useAppDispatch, useAppSelector } from "../../Store";
import "./ErrorMessage.css";
import { setErrorMessage } from "../../Store/App";

export default function ErrorMessage() {
  const errorMessage = useAppSelector((state) => state.app.errorMessage);
  const dispatch = useAppDispatch();

  if (!errorMessage) return null;

  const cleanErrorMessage = () => {
    dispatch(setErrorMessage(""))
  }

  return (
    <Dialog open={true} PaperProps={{ style: {
      backgroundColor: "rgb(51,51,51,0.4)",
      backdropFilter: "blur(48px)",
      borderRadius: `24px`,
      width: "200px"
      }}}
    >
     <Container column centered className="error-message">
        <div className="header">Error</div>
        <div className="message">{errorMessage}</div>
        <Button variant="contained" style={{ width: "100px" }} color="primary" onClick={cleanErrorMessage}
        >Close</Button>
      </Container>
    </Dialog>
  )
}
