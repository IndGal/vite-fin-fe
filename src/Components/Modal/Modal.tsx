//import Icon from "../Icon/Icon";

//import { themeIcons } from "../../Styles";
//import { useAppSelector } from "../../Store";

interface IModal extends React.ComponentProps<"div"> {
  show?: boolean;
  onClose?: (value?: any) => void;
  icon?: JSX.Element;
  notCloseOnOutside?: boolean;
}

export default function Modal(props: IModal) {
  const onClose = () => {
    if (props.onClose) props.onClose(true);
  };
  let className = "control modal-wrap";
  if (props.className) className += ` ${props.className}`;
  if (!props.show) return null;
  //const closeIcon = props.icon || themeIcons[theme].close;
  return (
    <div
      className={className}
      onClick={() => {
        if (!props.notCloseOnOutside) onClose();
      }}
    >
      <div
        className="modal"
        onClick={(event: any) => {
          event.stopPropagation();
        }}
      >
        <div className="header">
          <div className="title">{props.title}</div>
          <div className="form-control">
            <button className="button close icon" onClick={() => onClose()}>
              {/* <Icon icon={closeIcon} />{" "} */}
            </button>
          </div>
        </div>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}
