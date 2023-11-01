import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import moment from "moment";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import DangerousIcon from "@mui/icons-material/Dangerous";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import "../components-style/Dashboard.css";
import PosterPanel from "./PosterPanel";

export const Dashboard = (prop) => {
  const navigate = useNavigate();
  const errornotify = (msg) => toast.error(msg);
  const successnotify = (msg) => toast.success(msg);

  const [myinterviews, setmyinterviews] = useState([]);
  const [myinterviewsstatus, setmyinterviewsstatus] = useState(false);
  async function fetchingmyinterview() {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/user/myInterviews`,
      {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    if (result.status === "success") {
      setmyinterviews(result.data.data);
      // console.log(result.data.data);
    }
  }
  useEffect(() => {
    fetchingmyinterview();
  }, []);
  useEffect(() => {
    if (myinterviews.length) {
      setmyinterviewsstatus(true);
    }
  }, [myinterviews]);

  async function logoutuser() {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/user/logout`,
      {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    if (result.status === "success") {
      window.location.reload();
    }
  }
  function submitnow(e) {
    prop.setinterviewid(e);
    navigate("/addexperience");
  }
  const [posterID, setposterID] = useState("");
  const [posterpanel, setposterpanel] = useState(false);
  function generatePoster(_id) {
    setposterpanel(true);
    setposterID(_id);
  }

  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <div id="profile-dashboard">
        <div>
          <h2 style={{ textAlign: "center", fontStyle: "italic" }}>
            Interview Records
          </h2>
          {myinterviewsstatus ? (
            <>
              <table className="interview-table">
                <thead>
                  <tr>
                    <th className="interview-header">TimeStamp</th>
                    <th className="interview-header">Company Name</th>
                    <th className="interview-header">Job Status</th>
                    <th className="interview-header">Offer Type</th>
                    <th className="interview-header">Status</th>
                    <th className="interview-header"></th>
                  </tr>
                </thead>
                <tbody>
                  {myinterviewsstatus ? (
                    myinterviews.map((value, key) => (
                      <tr key={key}>
                        <td className="interview-data">
                          {moment(value.createdAt).format("YYYY-MM-DD, HH:mm")}
                        </td>
                        <td className="interview-data">
                          {value.company.charAt(0).toUpperCase() +
                            value.company.slice(1)}
                        </td>
                        <td className="interview-data">
                          {value.status.charAt(0).toUpperCase() +
                            value.status.slice(1)}
                        </td>
                        <td className="interview-data">
                          {value.offer.toUpperCase()}
                        </td>
                        <td className="interview-data">
                          {value.verification.status === "in-queue" ? (
                            <>
                              <HourglassTopIcon style={{ color: "#363f46" }} />{" "}
                              Pending
                            </>
                          ) : value.verification.status === "not-verified" ? (
                            <>
                              <SaveAsIcon style={{ color: "#ffaf01" }} /> To be
                              Submitted
                            </>
                          ) : value.verification.status === "rejected" ? (
                            <>
                              <DangerousIcon style={{ color: "#ee3241" }} />{" "}
                              Rejected
                            </>
                          ) : (
                            <>
                              <WorkspacePremiumIcon
                                style={{ color: "#89c702" }}
                              />{" "}
                              Verified
                            </>
                          )}
                        </td>
                        <td className="interview-data">
                          {value.verification.status === "accepted" ? (
                            <>
                              <button
                                className="dash-btn"
                                onClick={() => {
                                  generatePoster(value._id);
                                }}
                              >
                                Generate Poster
                              </button>
                            </>
                          ) : value.verification.status === "not-verified" ? (
                            <>
                              <button
                                className="dash-btn"
                                onClick={() => {
                                  submitnow(value._id);
                                }}
                              >
                                Submit Now
                              </button>
                            </>
                          ) : (
                            <></>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </>
          ) : (
            <>
              <table className="interview-table">
                <thead>
                  <tr>
                    <th className="interview-header">No Records Found...</th>
                  </tr>
                </thead>
              </table>
            </>
          )}
        </div>
      </div>
      <Button
        id="logout-btn"
        variant="contained"
        color="error"
        size="large"
        startIcon={<LogoutIcon />}
        onClick={logoutuser}
      >
        Logout
      </Button>
      {posterpanel === true ? (
        <PosterPanel
          posterID={posterID}
          setposterpanel={setposterpanel}
          successnotify={successnotify}
          errornotify={errornotify}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default Dashboard;
