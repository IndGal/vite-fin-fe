import "./Separator.css";

interface ISeparator extends React.ComponentProps<"div"> {
  thin?: boolean,
  hidden?: boolean
}

export default function Separator(props: ISeparator) {
    if (props.hidden) return null;

    const classNameArr: string[] = ["control", "separator"];
    props.thin && classNameArr.push("column");
    props.className && classNameArr.push(props.className);

    return <div className={classNameArr.join(" ")} />;
}