import React, { useState } from "react";
import apiClient from "../../services/apiClient";
import jobAppDetail from "./jobAppDetail.module.css";

const JobAppDetail = (props) => {
  if (!props.jobApp) {
    return <div data-testid="empty"></div>;
  }
  const [editState, setEditState] = useState(false);

  //state related to controlled inputs
  const [companyState, setCompanyState] = useState(props.jobApp.company);
  const [jobTitleState, setJobTitleState] = useState(props.jobApp.jobTitle);
  const [salaryState, setSalaryState] = useState(props.jobApp.salary);
  const [locationState, setLocationState] = useState(props.jobApp.location);
  const [webpageState, setWebpageState] = useState(props.jobApp.webpage);
  const [contactNameState, setContactNameState] = useState(
    props.jobApp.contactName
  );
  const [contactNumberState, setContactNumberState] = useState(
    props.jobApp.contactNumber
  );
  const [statusState, setStatusState] = useState(props.jobApp.status);
  const [descriptionState, setDescriptionState] = useState(
    props.jobApp.description
  );
  const [notesState, setNotesState] = useState(props.jobApp.notes);

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

  const handleAppSubmit = (e) => {
    props.jobDetailFormState === "add"
      ? apiClient.addJobApp({
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
      : apiClient.updateJobApp(props.jobApp.id, {
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

  return (
    <form>
      <div className={jobAppDetail.itemContainer3}>
        <div className={jobAppDetail.item}>
          <h5>Company</h5>
          <input
            data-testid="company"
            type="text"
            value={companyState}
            disabled={!editState}
            onChange={handleCompanyOnChange}
          />
        </div>
        <div className={jobAppDetail.item}>
          <h5>Job Title</h5>
          <input
            data-testid="jobTitle"
            type="text"
            value={jobTitleState}
            disabled={!editState}
            onChange={handleJobTitleOnChange}
          />
        </div>
        <div className={jobAppDetail.item}>
          <h5>Expected Salary</h5>
          <input
            data-testid="salary"
            type="text"
            value={salaryState}
            disabled={!editState}
            onChange={handleSalaryOnChange}
          />
        </div>
      </div>
      <div className={jobAppDetail.itemContainer2}>
        <div className={jobAppDetail.item}>
          <h5>Location</h5>
          <input
            data-testid="location"
            type="text"
            value={locationState}
            disabled={!editState}
            onChange={handleLocationOnChange}
          />
        </div>
        <div className={jobAppDetail.item}>
          <h5>Source Webpage</h5>
          <input
            data-testid="webpage"
            type="text"
            value={webpageState}
            disabled={!editState}
            onChange={handleWebpageOnChange}
          />
        </div>
      </div>
      <div className={jobAppDetail.itemContainer3}>
        <div className={jobAppDetail.item}>
          <h5>Contact Name</h5>
          <input
            data-testid="contactName"
            type="text"
            value={contactNameState}
            disabled={!editState}
            onChange={handleContactNameOnChange}
          />
        </div>
        <div className={jobAppDetail.item}>
          <h5>Contact Number</h5>
          <input
            data-testid="contactNumber"
            type="text"
            value={contactNumberState}
            disabled={!editState}
            onChange={handleContactNumberOnChange}
          />
        </div>
        <div className={jobAppDetail.item}>
          <h5>Application Status</h5>
          <input
            data-testid="status"
            type="text"
            value={statusState}
            disabled={!editState}
            onChange={handleStatusOnChange}
          />
        </div>
      </div>
      <div className={jobAppDetail.itemContainer2}>
        <div className={jobAppDetail.item}>
          <h5>Job Description</h5>
          <textarea
            data-testid="description"
            value={descriptionState}
            disabled={!editState}
            onChange={handleDescriptionOnChange}
          />
        </div>
        <div className={jobAppDetail.item}>
          <h5>Notes</h5>
          <textarea
            data-testid="notes"
            value={notesState}
            disabled={!editState}
            onChange={handleNotesOnChange}
          />
        </div>
      </div>
      <div className={jobAppDetail.btnContainer}>
        {/* <button data-testId='closeBtn'>Close</button> */}
        <button
          data-testid="submitBtn"
          onClick={handleAppSubmit}
          type="submit"
          disabled={!editState}
        >
          Submit
        </button>
        <button
          data-testid="editBtn"
          onClick={() => {
            setEditState(!editState);
          }}
          type="button"
        >
          Edit
        </button>
      </div>
    </form>
  );
};

export default JobAppDetail;
