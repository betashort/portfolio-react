import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import blogImage from "../assets/images/blog-image.png"
function ArtGallary() {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          alt="green iguana"
          src={blogImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tech Blog
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            テックブログ書いています。
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://betashort-lab.com/">
        Move
        </Button>
      </CardActions>
    </Card>
    </>
  );
}

export default ArtGallary;
