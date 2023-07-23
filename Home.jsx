import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 12, background: "orangered"}}
          variant="contained"
        >
          <Typography variant="h3">View   All   Books</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
