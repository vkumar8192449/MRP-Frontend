import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../components-style/AddExperience.css";

export const AddExperience = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [rounds, setRounds] = useState([]);
  const [phase, setphase] = useState(1);

  // const toastId = React.useRef(null);
  const errornotify = (msg) => toast.error(msg);
  // const sendingnotify = (msg) => (toastId.current = toast.loading(msg));
  // const dismiss = () => toast.dismiss(toastId.current);
  const successnotify = (msg) => toast.success(msg);

  const handleAddRound = (e) => {
    setRounds([...rounds, { questions: [], date: Date.now() }]);
  };

  const handleAddQuestion = (roundIndex) => {
    const updatedRounds = [...rounds];
    updatedRounds[roundIndex].questions.push({});
    setRounds(updatedRounds);
  };
  const settingphase = () => {
    if (phase === 1) {
      setphase(2);
    } else {
      setphase(1);
    }
  };

  const handleFormChange = (e, roundIndex, questionIndex) => {
    const { name, value } = e.target;
    if (questionIndex !== undefined) {
      const updatedRounds = [...rounds];
      updatedRounds[roundIndex].questions[questionIndex][name] = value;
      setRounds(updatedRounds);
    } else {
      const updatedRounds = [...rounds];
      updatedRounds[roundIndex][name] = value;
      setRounds(updatedRounds);
    }
  };
  function roundShrink(e) {
    var panel = e.target.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      var list = document.getElementsByClassName(`closing-round-panel`);
      for (let i of list) {
        i.style.display = "none";
      }
      panel.style.display = "block";
    }
  }
  function questionShrink(e) {
    var panel = e.target.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      var list = document.getElementsByClassName(`closing-panel`);
      for (let i of list) {
        i.style.display = "none";
      }
      panel.style.display = "block";
    }
  }
  const [formData, setFormData] = useState({
    status: "placed",
    offer: "fte",
    compensation: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  async function finalsubmit() {
    const obj = {
      company: companyName,
      rounds: rounds,
      status: formData.status,
      offer: formData.offer,
      compensation: formData.compensation,
      isSubmitted: true,
    };
    const response = await fetch("https://localhost:3000/api/v1/interview", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const result = await response.json();
    if (result.status == "success") {
      successnotify("Interview Added Successfully");
      navigate("/profile/dashboard");
    } else {
      errornotify(result.message);
    }
  }

  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <div className="interview-form-container">
        <p>Interview Form</p>
        {phase === 1 ? (
          <>
            <div className="form-group">
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>

            <div className="rounds-container">
              {/* Accorddation addign */}
              {rounds.map((round, roundIndex) => (
                <div key={`round-${roundIndex}`} className="round-panel">
                  <button
                    className={
                      true ? `round-top-${roundIndex} spl-round-btn` : ""
                    }
                    onClick={roundShrink}
                  >
                    Round {roundIndex + 1}
                  </button>
                  <div
                    style={{ display: "none" }}
                    id={true ? `round-panel-${roundIndex}` : ""}
                    className={
                      true
                        ? `round-panel-${roundIndex} closing-round-panel`
                        : ""
                    }
                  >
                    <br />

                    <div className="form-group">
                      <label htmlFor={`roundName${roundIndex}`}>
                        Round Name:
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={roundIndex.name}
                        onChange={(e) => handleFormChange(e, roundIndex)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`roundType${roundIndex}`}>
                        Round Type:
                      </label>
                      <select
                        id={`roundType${roundIndex}`}
                        name="type"
                        value={roundIndex.type}
                        onChange={(e) => handleFormChange(e, roundIndex)}
                      >
                        <option value="choose">Choose</option>
                        <option value="oa">OA</option>
                        <option value="technical">Technical</option>
                        <option value="sys-design">System Design</option>
                        <option value="hr">HR</option>
                      </select>
                    </div>
                    <div className="questions-container">
                      <button
                        type="button"
                        onClick={() => handleAddQuestion(roundIndex)}
                      >
                        Add Questions
                      </button>

                      {/* Accorddation addign */}
                      {round.questions.map((index, questionIndex) => (
                        <div key={`question-${roundIndex}-${questionIndex}`}>
                          <button
                            className={
                              true
                                ? `ques-top-${roundIndex}-${questionIndex} spl-question-btn`
                                : ""
                            }
                            onClick={questionShrink}
                          >
                            Question No. {questionIndex + 1}
                          </button>
                          <div
                            style={{ display: "none" }}
                            id={
                              true
                                ? `ques-panel-${roundIndex}-${questionIndex}`
                                : ""
                            }
                            className={
                              true
                                ? `ques-panel-${roundIndex}-${questionIndex} closing-panel`
                                : ""
                            }
                          >
                            <div className="form-group">
                              <label
                                htmlFor={`questionTitle${roundIndex}${questionIndex}`}
                              >
                                Title:
                              </label>
                              <input
                                type="text"
                                name="title"
                                value={questionIndex.title}
                                onChange={(e) =>
                                  handleFormChange(e, roundIndex, questionIndex)
                                }
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label
                                htmlFor={`questionDescription${roundIndex}${questionIndex}`}
                              >
                                Description:
                              </label>
                              <input
                                type="text"
                                name="description"
                                value={questionIndex.description}
                                onChange={(e) =>
                                  handleFormChange(e, roundIndex, questionIndex)
                                }
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label
                                htmlFor={`questionLink${roundIndex}${questionIndex}`}
                              >
                                Link:
                              </label>
                              <input
                                type="text"
                                name="link"
                                value={questionIndex.link}
                                onChange={(e) =>
                                  handleFormChange(e, roundIndex, questionIndex)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="form-group">
                      <label htmlFor={`roundNotes${roundIndex}`}>Notes:</label>
                      <textarea
                        name="note"
                        value={roundIndex.notes}
                        onChange={(e) => handleFormChange(e, roundIndex)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button type="button" onClick={handleAddRound}>
              Add Round
            </button>
            <hr />
            <div className="buttons-container">
              <button
                type="submit"
                onClick={settingphase}
                style={{ backgroundColor: "#0056b3" }}
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="placement-form-container">
              {/* <h3 style={{ textAlign: "center" }}>Placement Details</h3> */}
              <form onSubmit={handleSubmit} className="placement-form">
                <div className="form-group">
                  <label>Status:</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="placed">Placed</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="not-placed">Not Placed</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Offer:</label>
                  <select
                    name="offer"
                    value={formData.offer}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="fte">FTE</option>
                    <option value="intern">Internship</option>
                    {/* <option value="FTE+Internship">FTE + Internship</option> */}
                    {/* <option value="PPO">PPO</option> */}
                  </select>
                </div>
                <div className="form-group">
                  <label>Compensation:</label>
                  <input
                    type="text"
                    name="compensation"
                    value={formData.compensation}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    onClick={finalsubmit}
                    className="submit-button"
                  >
                    Final Submit
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
        ;
      </div>
      <br />
      <br />
    </>
  );
};

export default AddExperience;
