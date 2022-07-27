import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

function Profile({ user }) {
  const { avatar_url, name, login, bio } = user;
  return user ? (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 5,
      }}
    >
      <Card
        sx={{
          width: "345px",
          height: "600px",
          bgcolor: "#eaeef3",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardMedia component="img" image={avatar_url} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom color="text.secondary">
            - {login}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {bio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" fullWidth size="small" color="error">
            Share
          </Button>
        </CardActions>
      </Card>
    </Container>
  ) : null;
}

export default Profile;
