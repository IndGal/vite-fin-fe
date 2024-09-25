import "./Button.css";

interface IButton extends React.ComponentProps<"button"> {
  showType?:
    | "yellow"
    | "blue"
    | "secondary"
    | "secondary-border"
    | "link"
    | "ring";
  label?: string;
  img?: string;
  name: string;
  isDisabled?: boolean;
}

export default function Button(props: IButton) {
  const { showType, label, img, name, isDisabled, ...newProps } = props;

  let classNameExt = "button";
  classNameExt += ` ${showType || "yellow"}`;

  const onClick = (event: any) => {
    event.target.name = name;
    if (props.onClick) {
      props.onClick(event);
    }
  };

  if (newProps.className) classNameExt += ` ${newProps.className}`;

  const renderLabel = () => {
    if (label) return label;
    else return null;
  };

  const renderImage = () => {
    if (img) {
      return <img src={img} alt="logo" />;
    } else return null;
  };

  if (isDisabled) {
    classNameExt += " disabled";
    return (
      <button disabled className={classNameExt}>
        {renderImage()}
        {renderLabel()}
      </button>
    );
  }

  return (
    <button
      className={classNameExt}
      onClick={(event: any) => {
        onClick(event);
      }}
    >
      {renderImage()}
      {renderLabel()}
    </button>
  );
}
