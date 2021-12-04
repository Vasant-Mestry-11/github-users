import { Button, Input } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    value: "tracksdata",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleClick = () => {
    const { setUser } = this.props;
    const { value } = this.state;
    axios.get(`https://api.github.com/users/${value}`).then((res) => {
      setUser(res.data);
    });
  };

  render() {
    const { value } = this.state;

    return (
      <>
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
            onChange={this.handleChange}
            color="warning"
          />
          <Button
            variant="contained"
            color="warning"
            sx={{
              ml: 3,
            }}
            onClick={this.handleClick}
            disabled={!value}
          >
            Get User
          </Button>
        </Box>
      </>
    );
  }
}

export default Search;
