import React, { useState } from "react";
import "../components-style/LoginComponent.css";
import toast, { Toaster } from "react-hot-toast";

export const LoginComponent = (props) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  // eslint-disable-next-line
  const [usernameerror, setusernameerror] = useState(false);
  // eslint-disable-next-line
  const [userpassworderror, setuserpassworderror] = useState(false);

  const toastId = React.useRef(null);
  const sendingnotify = (msg) => (toastId.current = toast.loading(msg));
  const dismiss = () => toast.dismiss(toastId.current);
  const errornotify = (msg) => toast.error(msg);
  const successnotify = (msg) => toast.success(msg);

  async function tryLogin(e) {
    e.preventDefault();
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
          `${process.env.REACT_APP_API_URL}/api/v1/user/login`,
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
        console.log(result);
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
      {/* <div id="login-component">
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
      </div> */}

      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Log in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                College Mail ID
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="2021pgcaca001@nitjsr.ac.in"
                required=""
                onChange={(newValue) =>
                  setusername(newValue.target.value.toUpperCase())
                }
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                required=""
                onChange={(newValue) => setpassword(newValue.target.value)}
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  "
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 ">
                    Remember me
                  </label>
                </div>
              </div>
              <a
                style={{ cursor: "pointer" }}
                href="/resetpassword"
                class="text-sm font-medium text-primary-600 hover:underline "
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              onClick={tryLogin}
            >
              Log In
            </button>
            <p class="text-sm font-light text-gray-500">
              Don't have an account yet?{" "}
              <a
                href="/register"
                class="font-medium text-primary-600 hover:underline"
              >
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
