import React from "react";

const MedicalInfo = ({userData}) => {
    console.log(userData);
  return (
    <div className="medical__info">
      <div className="heading">
        <p>Medical Infomation</p>
      </div>

      <div className="table">
        <table className="table__heading">
          <thead>
            <tr className="head">
              <th>Suffer from</th>
              <th>Status</th>
              <th>Type of diagnosis</th>
              <th>Type</th>
              <th>Medication</th>
            </tr>
          </thead>

          <tbody >
            <tr >
              <td>{userData.userData.disease}</td>
              <td>{userData.status}</td>
              <td>{userData.userData.diagnosisType}</td>
              <td>{userData.userData.diagnosisType}</td>
              <td>{userData.userData.medication && userData.userData.medication}</td>
            </tr>
            <tr >
              <td>{userData.userData.disease}</td>
              <td>{userData.status}</td>
              <td>{userData.userData.diagnosisType}</td>
              <td>{userData.userData.diagnosisType}</td>
              <td>{userData.userData.medication && userData.userData.medication}</td>
            </tr>
            <tr >
              <td>{userData.userData.diagnosisType}</td>
              <td>{userData.status}</td>
              <td>{userData.userData.diagnosisType}</td>
              <td>{userData.userData.diagnosisType}</td>
              <td>{userData.userData.medication && userData.userData.medication}</td>
            </tr>
          </tbody>
        </table>




        {/* second table  */}

      </div>
        <div className="sub__details">
            <div className="allergies">
                <p className="heading">Food allergies</p>
                <p className="text">None</p>
            </div>
            <div className="problem">
                <p className="heading">Any other health problems?</p>
                <p className="text">None</p>
            </div>
            <div className="took__test">
                <p className="heading">When was the last time you took a test?</p>
  <p className="text">{userData.userData.testDate ? userData.userData.testDate : "None"}</p>
            </div>
        </div>

        <div className="table">
        <table className="table__heading">
          <thead>
            <tr className="head">
              <th>Suffer from</th>
              <th>Range</th>
              <th>Medication</th>
            </tr>
          </thead>

          <tbody >
            <tr >
              <td>{userData.userData.disease}</td>
              <td>{userData.status}</td>
              <td>{userData.userData.diagnosisType}</td>
              
            </tr>
          </tbody>
        </table>
        




        {/* second table  */}

      </div>
      <div className="sub__details2">
            <div className="allergies">
                <p className="heading">Iron Defiecieny</p>
                <p className="text">No</p>
            </div>
            <div className="problem">
                <p className="heading">Vitamin D deficiency</p>
                <p className="text">No</p>
            </div>
        </div>
    </div>
  );
};

export default MedicalInfo;
