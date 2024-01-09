import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../components-style/RegisterComponent.css";

export const ResetPassword = (props) => {
  const [createpassword, setcreatepassword] = useState("");
  const [otp, setotp] = useState("");
  const [userpassworderror, setuserpassworderror] = useState(false);
  const [userotperror, setuserotperror] = useState(false);

  const [registrationnumber, setregistrationnumber] = useState("");
  // eslint-disable-next-line
  const [registrationnumbererror, setregistrationnumbererror] = useState(false);
  const [otpsended, setotpsended] = useState(false);
  const [registerbtntxt, setregisterbtntxt] = useState("GET OTP");

  const toastId = React.useRef(null);
  const errornotify = (msg) => toast.error(msg);
  const sendingnotify = (msg) => (toastId.current = toast.loading(msg));
  const dismiss = () => toast.dismiss(toastId.current);
  const successnotify = (msg) => toast.success(msg);

  async function tryResetPassword(e) {
    e.preventDefault();
    if (registrationnumber.length === 0) {
      setregistrationnumbererror(true);
      errornotify("Enter Registration No.");
    } else if (registerbtntxt === "GET OTP") {
      sendingnotify("Sending OTP...");
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/user/forgotPassword`,
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
        setregisterbtntxt("Change Password");
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
        sendingnotify("Changing your Password...");
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
          successnotify("Password Changed Successfully");
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
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Get back to your account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Registration No.
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="2021pgcaca001"
                required=""
                onChange={(newValue) =>
                  setregistrationnumber(newValue.target.value)
                }
              />
            </div>
            {otpsended ? (
              <>
                <div>
                  <label
                    for="otp"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Enter OTP
                  </label>
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                    value={otp}
                    error={userotperror}
                    onChange={(newValue) => setotp(newValue.target.value)}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Create New Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                    value={createpassword}
                    error={userpassworderror}
                    onChange={(newValue) =>
                      setcreatepassword(newValue.target.value)
                    }
                  />
                </div>
              </>
            ) : (
              ""
            )}
            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={tryResetPassword}
            >
              {registerbtntxt}
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
export default ResetPassword;
