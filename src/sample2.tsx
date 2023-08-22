import { Box } from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { customRender } from "./customRender";

const data = customRender(500);

export function Sample2() {
  return (
    <Box
      sx={{
        height: 800,
        width: "100%",
      }}
    >
      <DataGridPro
        {...data}
        rowHeight={38}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
