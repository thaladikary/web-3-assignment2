import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../Context";
import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const LoginForm = () => {
  const { loggedIn, setLoggedIn } = useContext(AppContext);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const CustomButton = styled(Button)({
    margin: "5px",
  });

  return (
    <Box
      width={"50vw"}
      height={"100vh"}
      className="flex justify-center items-center bg-zinc-900"
    >
      <Box width={"25vw"} height={"50vh"} className="flex flex-col p-10">
        <h3 className="text-slate-100 text-center font-bold text-4xl mt-10 mb-10">
          F1 Database
        </h3>
        <form className="w-full flex flex-col">
          <input
            className="w-full mb-3 p-4 text-slate-300 bg-stone-950 rounded-md"
            type="text"
            placeholder="Email"
          />

          <input
            className="w-full mb-6 p-4 text-slate-300 bg-stone-950 rounded-md"
            type="text"
            placeholder="Password"
          />

          <div className="flex flex-row justify-around">
            <CustomButton
              variant="contained"
              color="success"
              className="w-full place-self-center"
              onClick={handleLogin}
            >
              Login
            </CustomButton>

            <CustomButton variant="contained" className="w-full">
              Register
            </CustomButton>
          </div>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
