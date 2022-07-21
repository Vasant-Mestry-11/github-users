import { Button, Input } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import axios from "axios";

const Search = ({ userName, setUser }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (String(userName).toLowerCase() !== value.toLowerCase()) {
      axios.get(`https://api.github.com/users/${value}`).then((res) => {
        setUser(res.data);
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 2,
        m: 2,
      }}
    >
      <Input
        sx={{
          width: "30%",
        }}
        placeholder="Search User"
        value={value}
        onChange={handleChange}
        color="warning"
      />
      <Button
        variant="contained"
        color="warning"
        sx={{
          ml: 3,
        }}
        onClick={() => handleClick(value)}
        disabled={!value}
      >
        Get User
      </Button>
    </Box>
  );
};

export default Search;
