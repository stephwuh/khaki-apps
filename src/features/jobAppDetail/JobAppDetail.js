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

  const handleAppSubmit = async (e) => {
    // e.preventDefault()

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
        <div className="row mb-3">
          <div className="col-4">
            <h5 className='text-nowrap' style={{fontSize:"1.1vw"}}>Company</h5>
            <input
              data-testid="company"
              className='text-nowrap' style={{fontSize:"1.1vw"}}
              type="text"
              value={companyState}
              disabled={!editState}
              onChange={handleCompanyOnChange}
            />
          </div>
          <div className="col-4">
            <h5 className='text-nowrap' style={{fontSize:"1.1vw"}}>Job Title</h5>
            <input
              data-testid="jobTitle"
              className='text-nowrap' style={{fontSize:"1.1vw"}}
              type="text"
              value={jobTitleState}
              disabled={!editState}
              onChange={handleJobTitleOnChange}
            />
          </div>
          <div className="col-4">
            <h5 className='text-nowrap' style={{fontSize:"1.1vw"}}>Expected Salary</h5>
            <input
              data-testid="salary"
              className='text-nowrap' style={{fontSize:"1.1vw"}}
              type="text"
              value={salaryState}
              disabled={!editState}
              onChange={handleSalaryOnChange}
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-6">
            <h5 className='text-nowrap' style={{fontSize:"1.1vw"}}>Location</h5>
            <input
              data-testid="location"
              className='text-nowrap' style={{fontSize:"1.1vw"}}
              type="text"
              value={locationState}
              disabled={!editState}
              onChange={handleLocationOnChange}
            />
          </div>
          <div className="col-6">
            <h5 className='text-nowrap' style={{fontSize:"1.1vw"}}>Source Webpage</h5>
            <input
              data-testid="webpage"
              className='text-nowrap' style={{fontSize:"1.1vw"}}
              type="text"
              value={webpageState}
              disabled={!editState}
              onChange={handleWebpageOnChange}
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-4">
            <h5 className='text-nowrap' style={{fontSize:"1.1vw"}}>Contact Name</h5>
            <input
              data-testid="contactName"
              className='text-nowrap' style={{fontSize:"1.1vw"}}
              type="text"
              value={contactNameState}
              disabled={!editState}
              onChange={handleContactNameOnChange}
            />
          </div>
          <div className="col-4">
            <h5 className='text-nowrap' style={{fontSize:"1.1vw"}}>Contact Number</h5>
            <input
              data-testid="contactNumber"
              className='text-nowrap' style={{fontSize:"1.1vw"}}
              type="text"
              value={contactNumberState}
              disabled={!editState}
              onChange={handleContactNumberOnChange}
            />
          </div>
          <div className="col-4">
            <h5 className='text-nowrap' style={{fontSize:"1.1vw"}}>Application Status</h5>
            <input
              data-testid="status"
              className='text-nowrap' style={{fontSize:"1.1vw"}}
              type="text"
              value={statusState}
              disabled={!editState}
              onChange={handleStatusOnChange}
            />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <h5 className='text-nowrap' style={{fontSize:"1.1vw"}}>Job Description</h5>
            <textarea
              data-testid="description"
              className='text-nowrap' style={{fontSize:"1.1vw"}}
              value={descriptionState}
              disabled={!editState}
              onChange={handleDescriptionOnChange}
            />
          </div>
          <div className="col">
            <h5 className='text-nowrap' style={{fontSize:"1.1vw"}}>Notes</h5>
            <textarea
              data-testid="notes"
              className='text-nowrap' style={{fontSize:"1.1vw"}}
              value={notesState}
              disabled={!editState}
              onChange={handleNotesOnChange}
            />
          </div>
        </div>
        <div className="row gx-0">
          <div className="col-1">
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
            <div className='row justify-content-end'>
            <div className="col-1 px-0">
              <button
                data-testid="editBtn"
                className="btn border w-100   addBtn"
                onClick={() => {
                  setEditState(!editState);
                }}
                type="button"
              >
                Edit
              </button>
            </div>

            <div className="col-1 px-0 mx-2">
              <button
                data-testid="submitBtn"
                className="btn border w-100 addBtn"
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
