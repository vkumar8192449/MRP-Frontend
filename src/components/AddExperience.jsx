import React, { useState } from "react";
import "../components-style/AddExperience.css";

export const AddExperience = () => {
  const [companyName, setCompanyName] = useState("");
  const [rounds, setRounds] = useState([]);

  const handleAddRound = (e) => {
    setRounds([...rounds, { questions: [] }]);
  };

  const handleAddQuestion = (roundIndex) => {
    const updatedRounds = [...rounds];
    updatedRounds[roundIndex].questions.push({});
    setRounds(updatedRounds);
  };

  const handleSaveDraft = () => {
    alert("Interview details saved as a draft.");
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

  return (
    <>
      <div className="interview-form-container">
        <p>Interview Form</p>
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
                className={true ? `round-top-${roundIndex} spl-round-btn` : ""}
                onClick={roundShrink}
              >
                Round {roundIndex + 1}
              </button>
              <div
                style={{ display: "none" }}
                id={true ? `round-panel-${roundIndex}` : ""}
                className={
                  true ? `round-panel-${roundIndex} closing-round-panel` : ""
                }
              >
                <br />

                <div className="form-group">
                  <label htmlFor={`roundName${roundIndex}`}>Round Name:</label>
                  <input
                    type="text"
                    name={`roundName${roundIndex}`}
                    value={roundIndex.name}
                    onChange={(e) => handleFormChange(e, roundIndex)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`roundType${roundIndex}`}>Round Type:</label>
                  <select
                    id={`roundType${roundIndex}`}
                    name={`roundType${roundIndex}`}
                    value={roundIndex.type}
                    onChange={(e) => handleFormChange(e, roundIndex)}
                  >
                    <option value="-">Choose</option>
                    <option value="OA">OA</option>
                    <option value="Technical">Technical</option>
                    <option value="System Design">System Design</option>
                    <option value="HR">HR</option>
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
                            name={`questionTitle${roundIndex}${questionIndex}`}
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
                            name={`questionDescription${roundIndex}${questionIndex}`}
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
                            name={`questionLink${roundIndex}${questionIndex}`}
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
                    name={`roundNotes${roundIndex}`}
                    value={roundIndex.notes}
                    onChange={(e) => handleFormChange(e, roundIndex)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
        <button type="button" onClick={handleAddRound}>
          Add Round
        </button>
        {/*  */}
        <hr />
        <div className="buttons-container">
          <button type="button" onClick={handleSaveDraft}>
            Save Draft
          </button>
          <button type="submit">Submit</button>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default AddExperience;
