import { GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  DataGridPro,
  GridActionsCellItem,
  GRID_CHECKBOX_SELECTION_COL_DEF,
} from "@mui/x-data-grid-pro";

import { Button, Typography } from "@mui/material";
import useSales from "../hooks/useSales";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../redux/store";

export interface Token {
  token: string;
}
export default function Sales() {
  const { data } = useSelector((state: RootState) => state.user);
  const { alleSales } = useSales();
  const { sales } = useSelector((state: RootState) => state.sales);

  const [rows, setRows] = useState([]);

  useEffect(() => {
    //buradad dirk baslayiinca hata laiordum beklemek gerktigini ogtendim
    alleSales<Token>(data?.token);
    if (sales) {
      setRows(
        sales?.map((item) => ({
          id:item?._id,
          date: item?.updatedAt,
          brand: item?.brandId?.name,
          product: item?.productId?.name,
          price: item?.price,
          amount: item?.productId?.quantity,
        }))
      );
    }
  }, []);
  console.log(sales);
  

  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
        Sales
      </Typography>
      <Button variant="contained">New Sales</Button>
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
