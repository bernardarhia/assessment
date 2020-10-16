import React, { useState } from "react";

const Form = () => {
  const [diagnosis, setDiagnosis] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState("");

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="form">
      <div className="container">
        {/* disease input  */}
        <div className="disease__input">
          <label htmlFor="disease">
            Do you suffer from any of the following
          </label>
          <select id="disease">
            <option value="Hello"> Hello </option>
            <option value="Hello"> Hello </option>
            <option value="Hello"> Hello </option>
          </select>
        </div>

        {/* disease status */}
        <div className="status">
          <label htmlFor="status">
            Status <sup style={{ fontSize: "20px" }}>*</sup>
          </label>
          <select
            name=""
            id="status"
            className="status__select"
            value={status}
            onChange={handleStatus}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        {/* Year of diagnosis */}
        {status === "Yes" && (
          <div className="diagnosis">
            <label htmlFor="diagnosis">Year of diagnosis</label>
            <input type={diagnosis ? "date" : "text"} placeholder="Date" />
          </div>
        )}

        {/* diagnosis type  and medication*/}

            <div className="diagnosis__type">
              <label htmlFor="">Diagnosis type</label>
              <input type="text" />
            </div>
            <div className="medication">
              <label htmlFor="">Medication</label>
              <input type="text" />
            </div>
      
        {/* blood test */}

        <div className="test">
          <div className="blood__test">
            <label htmlFor="">When was your last blood test </label>
            <input type="date" />
          </div>

          <div className="prove">
            <label htmlFor="">Upload test results</label>
            <label htmlFor="file">
              Drag 'n' drop the file here or click to select the file
            </label>
            <input type="file" id="file" />
          </div>
        </div>

        {/* Defeciencies */}

        <div className="deficiencies">
          <label htmlFor="">Any other deficiencies ?</label>
          <input type="text" />
        </div>

        {/* submit buttons */}

        <div className="btns">
          <div className="previous">
            <button>Previous</button>
          </div>
          <div className="save">
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
