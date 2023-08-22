import * as React from "react";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid-pro";
import { Button } from "@mui/material";

export function customRender(totalRows: number) {
  const columns: GridColDef[] = [
    {
      field: "date",
      width: 200,
      headerName: "Year",
      renderCell: (params: GridRenderCellParams<Date>) => {
        console.log("render called", params.row);
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
    },
    {
      field: "name",
      width: 200,
      headerName: "Name",
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
