import React, { useState } from "react";
import apiClient from "../../services/apiClient";
import jobAppDetail from "./jobAppDetail.module.css";

const JobAppDetail = (props) => {
  const [editState, setEditState] = useState(false);

  //state related to controlled inputs
  const [companyState, setCompanyState] = useState(
    props.jobApp ? props.jobApp.company : "empty"
  );
  const [jobTitleState, setJobTitleState] = useState(
    props.jobApp ? props.jobApp.jobTitle : "empty"
  );
  const [salaryState, setSalaryState] = useState(
    props.jobApp ? props.jobApp.salary : "empty"
  );
  const [locationState, setLocationState] = useState(
    props.jobApp ? props.jobApp.location : "empty"
  );
  const [webpageState, setWebpageState] = useState(
    props.jobApp ? props.jobApp.webpage : "empty"
  );
  const [contactNameState, setContactNameState] = useState(
    props.jobApp ? props.jobApp.contactName : "empty"
  );
  const [contactNumberState, setContactNumberState] = useState(
    props.jobApp ? props.jobApp.contactNumber : "empty"
  );
  const [statusState, setStatusState] = useState(
    props.jobApp ? props.jobApp.status : "empty"
  );
  const [descriptionState, setDescriptionState] = useState(
    props.jobApp ? props.jobApp.description : "empty"
  );
  const [notesState, setNotesState] = useState(
    props.jobApp ? props.jobApp.notes : "empty"
  );

  const handleCompanyOnChange = (e) => {
    setCompanyState(e.target.value);
  };

  const handleJobTitleOnChange = (e) => {
    setJobTitleState(e.target.value);
  };

  const handleSalaryOnChange = (e) => {
    setSalaryState(e.target.value);
  };

  const handleLocationOnChange = (e) => {
    setLocationState(e.target.value);
  };

  const handleWebpageOnChange = (e) => {
    setWebpageState(e.target.value);
  };

  const handleContactNameOnChange = (e) => {
    setContactNameState(e.target.value);
  };

  const handleContactNumberOnChange = (e) => {
    setContactNumberState(e.target.value);
  };

  const handleStatusOnChange = (e) => {
    setStatusState(e.target.value);
  };

  const handleDescriptionOnChange = (e) => {
    setDescriptionState(e.target.value);
  };

  const handleNotesOnChange = (e) => {
    setNotesState(e.target.value);
  };

  const handleAppSubmit = async (e) => {
    // e.preventDefault()

    if(!companyState && !jobTitleState && !locationState && !salaryState && !statusState && !webpageState && !contactNameState && !contactNumberState && !descriptionState && !notesState){
      alert('Must input something to add/update job application');
      return
    }

    let response =
      props.jobDetailFormState === "add"
        ? await apiClient.addJobApp({
            company: companyState,
            jobTitle: jobTitleState,
            location: locationState,
            salary: salaryState,
            status: statusState,
            webpage: webpageState,
            contactName: contactNameState,
            contactNumber: contactNumberState,
            description: descriptionState,
            notes: notesState,
          })
        : await apiClient.updateJobApp(props.jobApp.id, {
            company: companyState,
            jobTitle: jobTitleState,
            location: locationState,
            salary: salaryState,
            status: statusState,
            webpage: webpageState,
            contactName: contactNameState,
            contactNumber: contactNumberState,
            description: descriptionState,
            notes: notesState,
          });
  };

  const handleDeleteOnClick = () => {
    apiClient.deleteJobApp(props.jobApp.id);
  };

  return (
    <div className="container">
      <form>
        <div className="row d-block d-sm-flex section">
          <div className="col col-sm-4 item">
            <h5 className="text-nowrap">Company</h5>
            <input
              data-testid="company"
              className="text-nowrap"
              type="text"
              value={companyState}
              disabled={!editState}
              onChange={handleCompanyOnChange}
            />
          </div>
          <div className="col col-sm-4 item">
            <h5 className="text-nowrap">Job Title</h5>
            <input
              data-testid="jobTitle"
              className="text-nowrap"
              type="text"
              value={jobTitleState}
              disabled={!editState}
              onChange={handleJobTitleOnChange}
            />
          </div>
          <div className="col col-sm-4 item">
            <h5 className="text-nowrap">Expected Salary</h5>
            <input
              data-testid="salary"
              className="text-nowrap"
              type="text"
              value={salaryState}
              disabled={!editState}
              onChange={handleSalaryOnChange}
            />
          </div>
        </div>
        <div className="row d-block d-sm-flex section">
          <div className="col col-sm-6 item">
            <h5 className="text-nowrap">Location</h5>
            <input
              data-testid="location"
              className="text-nowrap"
              type="text"
              value={locationState}
              disabled={!editState}
              onChange={handleLocationOnChange}
            />
          </div>
          <div className="col col-sm-6 item">
            <h5 className="text-nowrap">Source Webpage</h5>
            <input
              data-testid="webpage"
              className="text-nowrap"
              type="text"
              value={webpageState}
              disabled={!editState}
              onChange={handleWebpageOnChange}
            />
          </div>
        </div>
        <div className="row d-block d-sm-flex section">
          <div className="col col-sm-4 item">
            <h5 className="text-nowrap">Contact Name</h5>
            <input
              data-testid="contactName"
              className="text-nowrap"
              type="text"
              value={contactNameState}
              disabled={!editState}
              onChange={handleContactNameOnChange}
            />
          </div>
          <div className="col col-sm-4 item">
            <h5 className="text-nowrap">Contact Number</h5>
            <input
              data-testid="contactNumber"
              className="text-nowrap"
              type="text"
              value={contactNumberState}
              disabled={!editState}
              onChange={handleContactNumberOnChange}
            />
          </div>
          <div className="col col-sm-4 item">
            <h5 className="text-nowrap">Application Status</h5>
            <input
              data-testid="status"
              className="text-nowrap"
              type="text"
              value={statusState}
              disabled={!editState}
              onChange={handleStatusOnChange}
            />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col item">
            <h5 className="text-nowrap">Job Description</h5>
            <textarea
              data-testid="description"
              value={descriptionState}
              disabled={!editState}
              onChange={handleDescriptionOnChange}
            />
          </div>
          <div className="col">
            <h5 className="text-nowrap">Notes</h5>
            <textarea
              data-testid="notes"
              value={notesState}
              disabled={!editState}
              onChange={handleNotesOnChange}
            />
          </div>
        </div>
        <div className="row gx-0">
          <div className="col-2">
            {props.jobDetailFormState === "update" && (
              <button
                data-testid="deleteBtn"
                className="btn border w-100 btn-danger dltBtn"
                disabled={!editState}
                onClick={handleDeleteOnClick}
              >
                Delete
              </button>
            )}
          </div>
          <div className="col">
            <div className="row justify-content-end h-100">
              <div className="col-2 px-0">
                <button
                  data-testid="editBtn"
                  className="btn border w-100 h-100 addBtn"
                  onClick={() => {
                    setEditState(!editState);
                  }}
                  type="button"
                >
                  Edit
                </button>
              </div>

              <div className="col-2 px-0 mx-2">
                <button
                  data-testid="submitBtn"
                  className="btn border w-100 h-100 addBtn"
                  onClick={handleAppSubmit}
                  type="submit"
                  disabled={!editState}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobAppDetail;
