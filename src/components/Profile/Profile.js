import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

function Profile({ user }) {
  const { avatar_url, name, login, bio } = user;
  return user ? (
    <Container>
      <Card sx={{ maxWidth: 345, bgcolor: "#2D3142" }}>
        <CardMedia component="img" image={avatar_url} />
        <CardContent sx={{ color: "#BFC0C0" }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            - {login}
          </Typography>
          <Typography variant="caption">{bio}</Typography>
        </CardContent>
      </Card>
    </Container>
  ) : null;
}

export default Profile;
