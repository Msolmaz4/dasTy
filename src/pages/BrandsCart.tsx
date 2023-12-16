import { Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
const BrandsCart = ({item}) => {
  return (
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
  )
}

export default BrandsCart