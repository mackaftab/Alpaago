
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Infobox.css';

function Infobox({info}) {


  return (
    <div className='infobox'>
      <div className="container">
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Dusty_road_towards_Tanzania_bordeer.jpg/1200px-Dusty_road_towards_Tanzania_bordeer.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <span>Temperature : {info.temp} C</span>
            <br />
            <span> MaxTemperature : {info.tempMax} C</span>
            <br />
            <span>MinTemperature : {info.tempMin} C</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
  )
}

export default Infobox
