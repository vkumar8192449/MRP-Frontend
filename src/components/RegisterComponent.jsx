import React, { useState } from "react";
import "../components-style/RegisterComponent.css";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

export const RegisterComponent = () => {
  const [registrationnumber, setregistrationnumber] = useState("");
  const [registrationnumbererror, setregistrationnumbererror] = useState(false);
  const [otpsended, setotpsended] = useState(false);
  const [registerbtntxt, setregisterbtntxt] = useState("GET OTP");

  function tryRegister() {
    if (registrationnumber.length === 0) {
      setregistrationnumbererror(true);
    } else {
      setotpsended(true);
      setregisterbtntxt("Sign Up");
    }
  }

  return (
    <>
      <div id="register-component">
        <TextField
          sx={{
            m: 1,
            width: "60%",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
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
          <TextField
            sx={{
              m: 1,
              width: "60%",
              backgroundColor: "white",
              borderRadius: "4px",
            }}
            InputLabelProps={{ sx: { color: "black", fontSize: "1.1rem" } }}
            id="filled-basic"
            label="Enter OTP"
            variant="filled"
          />
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
      </div>
    </>
  );
};
