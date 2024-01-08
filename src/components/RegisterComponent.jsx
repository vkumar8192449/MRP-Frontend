import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../components-style/RegisterComponent.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

export const RegisterComponent = (props) => {
  const [createpassword, setcreatepassword] = useState("");
  const [otp, setotp] = useState("");
  const [userpassworderror, setuserpassworderror] = useState(false);
  const [userotperror, setuserotperror] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [registrationnumber, setregistrationnumber] = useState("");
  const [registrationnumbererror, setregistrationnumbererror] = useState(false);
  const [otpsended, setotpsended] = useState(false);
  const [registerbtntxt, setregisterbtntxt] = useState("GET OTP");

  const toastId = React.useRef(null);
  const errornotify = (msg) => toast.error(msg);
  const sendingnotify = (msg) => (toastId.current = toast.loading(msg));
  const dismiss = () => toast.dismiss(toastId.current);
  const successnotify = (msg) => toast.success(msg);

  async function tryRegister() {
    if (registrationnumber.length === 0) {
      setregistrationnumbererror(true);
      errornotify("Enter Registration No.");
    } else if (registerbtntxt === "GET OTP") {
      sendingnotify("Sending OTP...");
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/user/signup`,
        {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reg_no: registrationnumber,
          }),
        }
      );
      const result = await response.json();
      dismiss();
      if (result.status === "success") {
        successnotify("OTP Sent Successfully");
        setotpsended(true);
        setregisterbtntxt("Sign Up");
      } else {
        errornotify(result.message);
        setregistrationnumbererror(true);
      }
    } else {
      if (otp === "") {
        errornotify("Enter OTP");
        setuserotperror(true);
      } else if (createpassword.length < 8) {
        errornotify("Create New Password");
        setuserpassworderror(true);
      } else {
        sendingnotify("Registering User...");
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/v1/user/resetPassword`,
          {
            method: "PATCH",
            mode: "cors",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: otp,
              password: createpassword,
              passwordConfirm: createpassword,
            }),
          }
        );
        const result = await response.json();
        dismiss();
        if (result.status === "success") {
          successnotify("Registered Successfully");
          setTimeout(() => {
            props.setislogin("true");
            props.setcurrentuser({ user: result.data.user });
          }, 2000);
        } else {
          errornotify("The OTP entered is incorrect");
        }
      }
    }
  }

  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      {/* <div id="register-component">
        <TextField
          sx={{
            m: 1,
            width: "60%",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
          disabled={otpsended ? true : false}
          value={registrationnumber}
          onChange={(newValue) =>
            setregistrationnumber(newValue.target.value.toUpperCase())
          }
          InputLabelProps={{ sx: { color: "black", fontSize: "1.1rem" } }}
          id="filled-basic"
          error={registrationnumbererror}
          label="Registration No."
          variant="filled"
        />
        {otpsended ? (
          <>
            <TextField
              sx={{
                m: 1,
                width: "60%",
                backgroundColor: "white",
                borderRadius: "4px",
              }}
              value={otp}
              error={userotperror}
              onChange={(newValue) => setotp(newValue.target.value)}
              InputLabelProps={{ sx: { color: "black", fontSize: "1.1rem" } }}
              id="filled-basic"
              label="Enter OTP"
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
              onChange={(newValue) => setcreatepassword(newValue.target.value)}
              variant="filled"
            >
              <InputLabel
                sx={{
                  color: "black",
                  fontSize: "1.1rem",
                }}
                htmlFor="filled-adornment-password"
              >
                Create Password
              </InputLabel>
              <FilledInput
                value={createpassword}
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
          </>
        ) : (
          ""
        )}
        <button id="exit-register" onClick={tryRegister}>
          {registerbtntxt}
        </button>
        <br />
        <Link id="already-registered" to="/login">
          <button className="already-registered">Already Registered</button>
        </Link>
      </div> */}
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Log in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Registration No.</label>
                      <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="2021pgcaca001" required="" onChange={(newValue) => setregistrationnumber(newValue.target.value)} />
                  </div>
                  <button type="submit" class="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={tryRegister}>Get OTP</button>
                  <p class="text-sm font-light text-gray-500">
                      Already registered? <a href="/login" class="font-medium text-primary-600 hover:underline">Login</a>
                  </p>
              </form>
          </div>
      </div>
    </>
  );
};
export default RegisterComponent;
