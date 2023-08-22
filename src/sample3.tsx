import { Box } from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { customRender } from "./customRender";
import { useState } from "react";

export function Sample3() {
  const [rows, setRows] = useState(500);
  let data = customRender(rows);

  return (
    <Box
      sx={{
        height: 800,
        width: "100%",
      }}
    >
      <button onClick={() => setRows(rows + 500)}> rows -500</button>
      <button onClick={() => setRows(rows > 0 ? rows - 500 : 0)}>
        rows +500
      </button>
      <DataGridPro
        {...data}
        rowHeight={38}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
