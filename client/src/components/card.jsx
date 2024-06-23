import React from 'react'
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cards(props) {
  return (
    <div>
       <Card sx={{ maxWidth: 345, mx: 1,my:2}}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.newobject.urlToImage}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.newobject.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.newobject.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={props.newobject.url} size="small">Learn more</Button> 
      </CardActions>
    </Card>
      
    </div>
    )
   }

export default Cards
