import * as React from "react";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid-pro";
import { Button } from "@mui/material";

const MemoCol = React.memo(
  (params: GridRenderCellParams<Date>) => {
    console.log("rendered");
    return (
      <strong>
        {params.value}
        <Button
          variant="contained"
          size="small"
          style={{ marginLeft: 16 }}
          tabIndex={params.hasFocus ? 0 : -1}
        >
          Open
        </Button>
      </strong>
    );
  },

  // https://react.dev/reference/react/memo

  (prevProps, nextProps) => {
    if (prevProps.value === nextProps.value) {
      return true;
    }
    if (prevProps.hasFocus === nextProps.hasFocus) {
      return true;
    }
    return false;
  }
);

export function customRender(totalRows: number) {
  const columns: GridColDef[] = [
    {
      field: "name",
      width: 200,
      headerName: "Name",
      renderCell: (params: GridRenderCellParams<any>) => {
        console.log("return memo");
        return <MemoCol {...params}></MemoCol>;
      },
    },
    {
      field: "age",
      width: 100,
      headerName: "age",
    },
  ];

  let rows = [];
  for (let i = 0; i < totalRows; i++) {
    rows.push({ id: i, date: i + 2021, name: "person 2", age: i + 20 });
  }

  return { columns, rows };
}
