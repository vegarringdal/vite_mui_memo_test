import { Box, useForkRef } from "@mui/material";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DataGridPro, GridCell } from "@mui/x-data-grid-pro";
import React from "react";

export const TraceUpdates = React.forwardRef<any, any>((props, ref) => {
  const { Component, ...other } = props;
  const rootRef = React.useRef<HTMLElement>();
  const handleRef = useForkRef(rootRef, ref);

  React.useEffect(() => {
    const root = rootRef.current;
    root!.classList.add("updating");
    root!.classList.add("updated");

    const timer = setTimeout(() => {
      root!.classList.remove("updating");
    }, 360);

    return () => {
      clearTimeout(timer);
    };
  });

  return <Component ref={handleRef} {...other} />;
});

const CellWithTracer = React.forwardRef((props, ref) => {
  return <TraceUpdates ref={ref} Component={GridCell} {...props} />;
});

const slots = {
  cell: CellWithTracer,
};

export function Sample1() {
  let { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 1000,
    editable: true,
    maxColumns: 25,
  });

  return (
    <Box
      sx={{
        height: 800,
        width: "100%",
        "&&& .updated": {
          transition: (theme) =>
            theme.transitions.create(["background-color", "outline"], {
              duration: theme.transitions.duration.standard,
            }),
        },
        "&&& .updating": {
          backgroundColor: "rgb(92 199 68 / 20%)",
          outline: "1px solid rgb(92 199 68 / 35%)",
          outlineOffset: "-1px",
          transition: "none",
        },
      }}
    >
      <DataGridPro
        {...data}
        rowHeight={38}
        checkboxSelection
        disableRowSelectionOnClick
        slots={slots}
      />
    </Box>
  );
}
