import { useEffect, useState } from "react";
import { TData } from "../../Models";

interface ITableRowLabel {
  columnsMap: TData;
  row: TData;
  onRowClick?: (row: TData) => void;
}

export default function TableRowLabel(props: ITableRowLabel) {
  const { columnsMap, row } = props;
  const [firstRowKey, setFirstRowKey] = useState<string>("");

  useEffect(() => {
    setFirstRowKey(Object.keys(row)[0]);
  }, []);

  const onRowClick = (row: TData) => {
    if (props.onRowClick) props.onRowClick(row);
  };

  const renderFirst = () => {
    return (
      <div key={`rw1`} className="data first" onClick={() => onRowClick(row)}>
        <div className="label">
          {columnsMap[firstRowKey] ?? firstRowKey + ":"}
        </div>
        <div className="value">{row[firstRowKey]}</div>
      </div>
    );
  };
  const renderOther = () => {
    let result: JSX.Element[] = [];
    Object.keys(row).forEach((key, idx) => {
      if (key !== firstRowKey) {
        let value = row[key];
        if (key === "networkName") value = value.toUpperCase();
        result.push(
          <div
            key={`rwother${idx}`}
            className="data"
            onClick={() => onRowClick(row)}
          >
            <div className="label">{columnsMap[key] ?? key + ":"}</div>
            <div className="value">{value}</div>
          </div>
        );
      }
    });
    return <div className="wrap">{result}</div>;
  };

  return (
    <div key={`rowaslabel${row}`} className="tablerow-container">
      {renderFirst()}
      {renderOther()}
    </div>
  );
}
