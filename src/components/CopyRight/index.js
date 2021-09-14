import React from "react";
import Typography from "@material-ui/core/Typography";

// 底部 Copyright
// 组件一定要大驼峰命名，尽量写函数式组件
const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {`Copyright © 2020-${new Date().getFullYear()} Dreamerryao`}
      </Typography>
    );
  };

export default Copyright;