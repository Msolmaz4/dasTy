import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Brands = () => {

  const { veri } = useSelector((state:RootState) => state.firma);
  console.log(veri?.data, "bransd");
  return (
    <div>
       <Typography gutterBottom variant="h5" component="div">
          Brands
        </Typography>
      <Button variant="contained">New Brands</Button>
     <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}>  
{
  
  veri?.data?.map((item)=>(
    <div>
      
      <Card sx={{width:350  }}>
 <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>

      <CardMedia
        sx={{ height: 140 ,width:330}}
        image={item.image}
        title="green iguana"
      />
      <CardContent>
       
       
      </CardContent>
      <CardActions>
        <Button size="small" >delete</Button>
        <Button size="small">update</Button>
      </CardActions>
    </Card>
      </div>
  ))

  
}
   </div>   
    </div>
  )
}

export default Brands