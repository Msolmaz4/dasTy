import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import useFirms from "../hooks/useFirms";
import DeatailModal from "./DeatailModal";


const FirmaCard = ({ item, token}) => {

  const { deleteFirma } = useFirms();
  

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => deleteFirma({ id: item._id, token: token })}
        >
          delete
        </Button>
        
   
       <DeatailModal name={item.name} address={item.address} image={item.image} phone={item.phone}/>
        <Button size="small" onClick={()=>console.log(item._id)} > 
      up
           </Button>
      </CardActions>
    </Card>
  );
};
export default FirmaCard;
