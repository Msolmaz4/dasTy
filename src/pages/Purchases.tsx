import { GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  DataGridPro,
  GridActionsCellItem,
  GRID_CHECKBOX_SELECTION_COL_DEF,
} from "@mui/x-data-grid-pro";

import { Button, Typography } from "@mui/material";
import usePurchases from "../hooks/usePurchases";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Purchases() {
  const { allePurchases } = usePurchases();
  const { data } = useSelector((state: RootState) => state.user);
  const { purchases } = useSelector((state) => state.purchases);
  console.log(purchases, "pur");

  const [rows, setRows] = useState([]);
  useEffect(() => {
    allePurchases(data?.token);
    if (purchases) {
      setRows(
        purchases?.map((item) => ({
          id: item?._id,
          date: item?.updatedAt,
          firma:item?.firmId.name,
          brand: item?.brandId?.name,
          product: item?.productId?.name,
          quantity:item?.quantity,
          price: item?.price,
          amount: item?.productId?.quantity,
        }))
      );
    }
  }, []);

  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
        Purchases
      </Typography>
      <Button variant="contained">New Purchases</Button>
      <div style={{ height: 400, width: "100%" }}>
        <DataGridPro
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
          initialState={{
            pinnedColumns: {
              left: [GRID_CHECKBOX_SELECTION_COL_DEF.field],
              right: ["actions"],
            },
          }}
        />
      </div>
    </div>
  );
}

const columns = [
  { field: "date", headerName: "Date", width: 350 },
  { field: "firma", headerName: "Firma", type: "string" },
  { field: "brand", headerName: "Brand", type: "number" },

  {
    field: "product",
    headerName: "Product",
    type: "number",
    width: 180,
    editable: true,
  },
  {
    field: "quantity",
    headerName: " Quantity",
    type: "number",
    width: 220,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 220,
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 220,
  },
  {
    field: "actions",
    type: "actions",
    width: 100,
    getActions: () => [
      <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
      <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
    ],
  },
];
