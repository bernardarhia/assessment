import React, { useState } from "react";
import Collapsable from "../components/Collapsable"
import { option1, option2, option3 } from "../contents/diseases"
import {Link} from "react-router-dom";
const Form = (props) => {
  const [diagnosis] = useState(true);
  const [status, setStatus] = useState("");
  const [userData, setUserData] = useState({});
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  const handleUSerData = (e) => {
    setUserData({
      ...userData,
      [e.target.name] : e.target.value
    });
  };

  // const handleSubmit = (e) =>{
  //   e.preventDefault()
  //   props.history.push({
  //     pathname: '/report',
  //     state:"hello"
  //   });
  // }
  return (
    <div className="form">
      <form >

      <div className="container">
        {/* disease input  */}
        <div className="disease__input">
          <label htmlFor="">Do you suffer from any of the following</label>
          <Collapsable handleUSerData={handleUSerData} options={option1} name="disease"/>
        </div>

        {/* disease status */}
        <div className="status">
          <label htmlFor="status">
            Status <sup style={{ fontSize: "20px" }}>*</sup>
          </label>
          <select
            name="status"
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

        <div className="diagnosis">
          <label htmlFor="diagnosis">Year of diagnosis</label>
          <input
            type={diagnosis ? "date" : "text"}
            placeholder="Date"
            name="yearOfDiagnosis"
            onChange={handleUSerData}
          />
        </div>

        {/* diagnosis type  and medication*/}

        {status === "Yes" && (
          <>
            <div className="diagnosis__type">
              <label htmlFor="">Diagnosis type</label>
              <Collapsable handleUSerData={handleUSerData} options={option2} name="diagnosisType" />
            </div>
            <div className="medication">
              <label htmlFor="">Medication</label>
              <Collapsable handleUSerData={handleUSerData} options={option3} name="medication" />
            </div>
          </>
        )}
        {/* blood test */}

        <div className="test">
          <div className="blood__test">
            <label htmlFor="">When was your last blood test </label>
            <input type="date" name="testDate" onChange={handleUSerData} />
          </div>

          <div className="prove">
            <label htmlFor="">Upload test results</label>
            <label htmlFor="file">
              Drag 'n' drop the file here or click to select the file
            </label>
            <input type="file" id="file" />
          </div>
        </div>
        <label htmlFor="">Do you suffer from any of the following</label>
        <Collapsable handleUSerData={handleUSerData} options={option1} name="disease2" />

        {/* Defeciencies */}

        <div className="deficiencies">
          <label htmlFor="">Any other deficiencies ?</label>
          <Collapsable handleUSerData={handleUSerData}  options={option1} name="deficiencies" />
        </div>
        <label htmlFor="">Do you suffer from any of the following</label>
        <Collapsable handleUSerData={handleUSerData}  options={option1} name="disease3" />

        {/* submit buttons */}

        <div className="btns">
          <div className="previous">
            <Link to="">Previous</Link>
          </div>
          <div className="save">
          <Link to={{
            pathname:"/report",
            state:{userData, status}
          }}>Save</Link>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Form;
