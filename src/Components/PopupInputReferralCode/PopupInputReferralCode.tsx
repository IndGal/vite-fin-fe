import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Store";
import { setReferralCode } from "../../Store/User";
import "./PopupInputReferralCode.css";
import { Button } from "../../Controls";
import { DialogBlur } from "../DialogBlur/DialogBlur";

export default function PopupInputReferralCode() {
  const dispatch = useAppDispatch();
  const referralCode = useAppSelector((state) => state.user.referralCode);
  const [newReferralNumber, setNewReferralNumber] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const width = window.screen.width;

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [referralCode]);

  const onSubmit = () => {
    dispatch(setReferralCode(newReferralNumber));
    setNewReferralNumber("");
  };

  let radius = "20px";
  if (width <= 768) {
    radius = "16px";
  }

  return (
    <DialogBlur showDialog={!referralCode} borderRadius={radius}>
      <div className="dialog-content">
        <div className="dialog-title">Referral Code</div>
        <div className="dialog-line"></div>
        <div className="dialog-comment">
          Please enter the referral code to proceed to the presale page
        </div>
        <input
          ref={inputRef}
          className="dialog-input"
          placeholder="Example: 2547451236"
          value={newReferralNumber}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setNewReferralNumber(event.target.value);
          }}
        />
        <div className="dialog-line"></div>
        <div className="dialog-submit">
          <Button name="btnsubmitreferral" label="Submit" onClick={onSubmit} />
        </div>
      </div>
    </DialogBlur>
  );
}
