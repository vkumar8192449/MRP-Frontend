import React, { useEffect, useState } from "react";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import moment from "moment";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import "../components-style/Dashboard.css";

export const Dashboard = () => {
  const [myinterviews, setmyinterviews] = useState([]);
  const [myinterviewsstatus, setmyinterviewsstatus] = useState(false);
  async function fetchingmyinterview() {
    const response = await fetch(
      "https://localhost:3000/api/v1/user/myInterviews",
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
    if (result.status == "success") {
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
    const response = await fetch("https://localhost:3000/api/v1/user/logout", {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.status === "success") {
      window.location.reload();
    }
  }

  return (
    <>
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
                              <button className="dash-btn">
                                Generate Poster
                              </button>
                            </>
                          ) : value.verification.status === "not-verified" ? (
                            <>
                              <button className="dash-btn">Submit Now</button>
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
    </>
  );
};
export default Dashboard;
