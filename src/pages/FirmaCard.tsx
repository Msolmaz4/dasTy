import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import useFirms from "../hooks/useFirms";

const FirmaCard = ({ item, token }) => {
  console.log(token, "firmacard");
  const { deleteFirma } = useFirms();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => deleteFirma({ id: item._id, token: token })}
        >
          delete
        </Button>
        <Button size="small">update</Button>
      </CardActions>
    </Card>
  );
};
export default FirmaCard;
