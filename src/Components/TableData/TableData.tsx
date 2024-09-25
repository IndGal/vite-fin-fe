import { useEffect, useState } from "react";
import "./TableData.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { TData } from "../../Models";
import TableRowLabel from "./TableRowLabel";
import nodata_icon from "../../Static/Images/svg/no_tablerows.svg";

interface ITableData {
  columnsMap: TData;
  data: TData[];
  maxTableHeigh?: string;
  defaultRowsPerPage?: number;
  showAllColumns?: boolean;
  onRowClick?: (row: TData) => void;
  showNoData?: boolean;
  noDataText?: string;
  noDataImage?: string;
}

export default function TableData(props: ITableData) {
  const {
    data,
    columnsMap,
    maxTableHeigh,
    defaultRowsPerPage,
    showAllColumns,
    showNoData,
    noDataText,
    noDataImage,
  } = props;
  const [width, setWidth] = useState<number>(window.screen.width);
  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState<TData[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(
    defaultRowsPerPage || 10
  );

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.screen.width));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.screen.width));
  }, []);

  useEffect(() => {
    const columns_tmp: string[] = [];
    const rows_tmp: TData[] = [];
    let row_tmp: TData;
    if (data.length) {
      data.forEach((row, index) => {
        row_tmp = {};
        Object.keys(row).forEach((key) => {
          if (index === 0 && (showAllColumns || columnsMap[key])) {
            columns_tmp.push(key);
          }
          if (showAllColumns || columnsMap[key]) {
            row_tmp[key] = row[key];
          }
        });
        rows_tmp.push(row_tmp);
      });
    }
    setColumns(columns_tmp);
    setRows(rows_tmp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (width < 768 && rowsPerPage !== 5) {
      setRowsPerPage(5);
      setPage(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  if (!data.length) {
    if (!(showNoData ?? true)) return null;

    const size = width <= 768 ? "60" : 120;
    return (
      <div className="nodata-table">
        <img src={noDataImage || nodata_icon} width={size} height={size}></img>
        <div className="nodata-label">
          {noDataText || "No transactions yet"}
        </div>
      </div>
    );
  }

  const handleChangePage = (_: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onRowClick = (index: number) => {
    props.onRowClick && props.onRowClick(data[index]);
  };

  let tableHeigh = "400px";
  if (maxTableHeigh) tableHeigh = maxTableHeigh;

  if (width < 768) {
    return (
      <div className="mobile-container">
        <div className="table-rows-container">
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
              return (
                <TableRowLabel
                  key={`lbl${index}`}
                  onRowClick={() => onRowClick(index)}
                  row={row}
                  columnsMap={columnsMap}
                />
              );
            })}
        </div>
        <div className="pagination">
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    );
  }

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      <TableContainer sx={{ maxHeight: tableHeigh }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className={column}
                  key={`header${column}`}
                  align={"left"}
                  sx={{
                    border: "none",
                    backgroundColor: "#242424",
                    paddingBottom: "8px",
                    paddingTop: "8px",
                  }}
                >
                  {columnsMap[column] ?? column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    onClick={() => onRowClick(index)}
                    hover
                    //role="checkbox"
                    tabIndex={-1}
                    key={`row${index}`}
                  >
                    {columns.map((column) => {
                      let value = row[column];
                      if (column === "Chain") value = value.toUpperCase();
                      return (
                        <TableCell
                          className={column}
                          key={`row${index}${column}`}
                          align={"left"}
                          sx={{
                            border: "none",
                            paddingBottom: "8px",
                            paddingTop: "8px",
                          }}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination">
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </Paper>
  );
}
