import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

function Profile({ user }) {
  const { avatar_url } = user;
  return user ? (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" image={avatar_url} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </Container>
  ) : null;
}

export default Profile;
