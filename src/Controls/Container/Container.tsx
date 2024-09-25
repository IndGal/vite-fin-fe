import "./Container.css";

interface IContainer extends React.ComponentProps<"div"> {
  column?: boolean,
  centered?: boolean,
  hidden?: boolean,
  padding?: boolean,
  fullWidth?: boolean
}

export default function Container(props: IContainer) {
  if (props.hidden) return null;

  const classNameArr: string[] = ["control", "container"];
  props.column && classNameArr.push("column");
  props.centered && classNameArr.push("centered");
  props.padding && classNameArr.push("padding");
  props.fullWidth && classNameArr.push("full-width");
  props.className && classNameArr.push(props.className);

  return (
    <div className={classNameArr.join(" ")} >
      {props.children}
    </div>
  )
}