import { Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductModal from "./ProductModal";





const Products = () => {
  const { data } = useSelector((state: RootState) => state.user);
  const [info, setInfo] = useState({
    categoryId: "",
    brandId: "",
    name: "",
  });
  const { products } = useSelector((state) => state.product);
  console.log(products?.data, "product");

  const { allePro, deletePro } = useProducts();
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  useEffect(() => {
    allePro(data?.token);

    if (products?.data) {
      setRows(
        products?.data.map((row) => ({
          id: row?._id,
          category: row?.categoryId?.name,
          Name: row.name,
          Stock: row.quantity,
          Action: "",
        }))
      );
    } else {
      console.log("product adat hata var");
    }
  }, []);
  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen}>New Product</Button>
      <ProductModal
        open={open}
     
        handleClose={handleClose}
        inp={info}
        setInp={setInfo}
        product={products}
        token= {data?.token}
      />
      <div>
        <div style={{ height: 550, width: "100%" }}>
          <DataGrid
            columns={[
              { field: "id", hideable: false },
              { field: "category" },
              { field: "Name" },
              { field: "Stock" },
              {
                field: "Action",
                headerName: "Action",
                sortable: false,
                width: 100,
                renderCell: (params) => (
                  <>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => 
                        deletePro({ id: params.row.id, token: data?.token })
                       
                      }
                    >
                      Sil
                    </Button>
                  </>
                ),
              },
            ]}
            rows={rows}
            slots={{
              toolbar: GridToolbar,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
