import React from "react";
import Typography from "@material-ui/core/Typography";

const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {`Copyright © 2020-${new Date().getFullYear()} Dreamerryao`}
      </Typography>
    );
  };

export default Copyright;