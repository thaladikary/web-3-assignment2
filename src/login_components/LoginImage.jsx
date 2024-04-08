import React from "react";
import { Box } from "@mui/material";

const LoginImage = () => {
  return (
    <Box width={"50vw"} height={"100vh"}>
      <img
        className="w-full h-full object-cover"
        src="/assets/login-hero-img.jpeg"
      />
      <div className="absolute bottom-0">
        <p className="text-white opacity-50 text-sm">
          <a href="https://www.mclaren.com/racing/formula-1">Image credits</a>
        </p>
      </div>
    </Box>
  );
};

export default LoginImage;
