import React from "react";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import "../components-style/Dashboard.css";

export const Dashboard = () => {
  return (
    <>
      <div id="profile-dashboard">
        <div>
          <h2 style={{ textAlign: "center", fontStyle: "italic" }}>
            Interview Records
          </h2>
          <table className="interview-table">
            {" "}
            <thead>
              <tr>
                <th className="interview-header">TimeStamp</th>
                <th className="interview-header">Company Name</th>
                <th className="interview-header">Job Role</th>
                <th className="interview-header">Offer Type</th>
                <th className="interview-header">Status</th>
                <th className="interview-header"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="interview-data">2023-08-31 10:00 AM</td>
                <td className="interview-data">Company A</td>
                <td className="interview-data">Software Engineer</td>
                <td className="interview-data">Full-Time</td>
                <td className="interview-data">
                  <HourglassTopIcon style={{ color: "#363f46" }} /> Pending
                </td>
                <td className="interview-data"></td>
              </tr>
              <tr>
                <td className="interview-data">2023-08-30 02:30 PM</td>
                <td className="interview-data">Company B</td>
                <td className="interview-data">Data Analyst</td>
                <td className="interview-data">Internship</td>
                <td className="interview-data">
                  <WorkspacePremiumIcon style={{ color: "#89c702" }} /> Verified
                </td>
                <td className="interview-data dash-col">
                  <button className="dash-btn">Generate Poster</button>
                </td>
              </tr>
              <tr>
                <td className="interview-data">2023-08-30 02:30 PM</td>
                <td className="interview-data">Company B</td>
                <td className="interview-data">Data Analyst</td>
                <td className="interview-data">Internship</td>
                <td className="interview-data">
                  <SaveAsIcon style={{ color: "#ffaf01" }} /> To be Submitted
                </td>
                <td className="interview-data dash-col">
                  <button className="dash-btn">Submit Now</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
