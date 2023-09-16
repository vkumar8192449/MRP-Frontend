import React, { useState } from "react";
import "../components-style/LoginComponent.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export const LoginComponent = (props) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [usernameerror, setusernameerror] = useState(false);
  const [userpassworderror, setuserpassworderror] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const toastId = React.useRef(null);
  const sendingnotify = (msg) => (toastId.current = toast.loading(msg));
  const dismiss = () => toast.dismiss(toastId.current);
  const errornotify = (msg) => toast.error(msg);
  const successnotify = (msg) => toast.success(msg);

  async function tryLogin() {
    if (!username.endsWith("@NITJSR.AC.IN")) {
      errornotify("Invalid Email or Password");
      setusername("");
      setpassword("");
      setusernameerror(true);
      setuserpassworderror(true);
    } else {
      if (password.length === 0) {
        setuserpassworderror(true);
        errornotify("Enter Password");
      } else {
        sendingnotify("Verifing...");
        const response = await fetch(
          "https://localhost:3000/api/v1/user/login",
          {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: username,
              password: password,
            }),
          }
        );
        const result = await response.json();
        dismiss();
        if (result.status === "success") {
          successnotify("Logged in successfully");
          setTimeout(() => {
            props.setislogin("true");
            props.setcurrentuser({ user: result.data.user });
          }, 2000);
        } else {
          errornotify(result.message);
        }
      }
    }
  }

  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <div id="login-component">
        <TextField
          sx={{
            m: 1,
            width: "60%",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
          value={username}
          onChange={(newValue) =>
            setusername(newValue.target.value.toUpperCase())
          }
          InputLabelProps={{ sx: { color: "black", fontSize: "1.1rem" } }}
          id="filled-basic"
          error={usernameerror}
          label="Email"
          variant="filled"
        />
        <FormControl
          sx={{
            m: 1,
            width: "60%",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
          error={userpassworderror}
          onChange={(newValue) => setpassword(newValue.target.value)}
          variant="filled"
        >
          <InputLabel
            sx={{
              color: "black",
              fontSize: "1.1rem",
            }}
            htmlFor="filled-adornment-password"
          >
            Password
          </InputLabel>
          <FilledInput
            value={password}
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <button id="exit-login" onClick={tryLogin}>
          LOG IN
        </button>
        <p className="forgotten-pass">Forgotten password?</p>
        <Link id="new-register" to="/register">
          <button className="new-register">Register</button>
        </Link>
      </div>
    </>
  );
};
