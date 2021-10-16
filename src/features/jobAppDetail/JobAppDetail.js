import React, {useState} from 'react';
import jobAppDetail from './jobAppDetail.module.css'

const JobAppDetail = (props) => {

    const [editState, setEditState] = useState(false);

    const [companyState, setCompanyState] = useState(props.jobApp.company)

    const [jobTitleState, setJobTitleState] = useState(props.jobApp.jobTitle)

    const handleCompanyOnChange = e =>{
        setCompanyState(e.target.value)
    }

    const handleJobTitleOnChange = e =>{
        setJobTitleState(e.target.value)
    }

    return(
        <form>
            <div className={jobAppDetail.itemContainer3}>
                <div className={jobAppDetail.item}>
                    <h5>Company</h5>
                    <input 
                        data-testid="company"
                        type='text'
                        value={companyState}
                        disabled={!editState}
                        onChange={handleCompanyOnChange}
                        />
                </div>
                <div className={jobAppDetail.item}>
                    <h5>Job Title</h5>
                    <input 
                        data-testid="jobTitle"
                        type='text'
                        value={jobTitleState} 
                        disabled={!editState}
                        onChange={handleJobTitleOnChange}
                        />
                </div>
                <div className={jobAppDetail.item}>
                    <h5>Expected Salary</h5>
                    <input 
                        data-testid="salary"
                        type='text'
                        value={props.jobApp.salary}/>               
                </div>
            </div>
            <div className={jobAppDetail.itemContainer2}>
                <div className={jobAppDetail.item}>
                    <h5>Location</h5>
                    <input 
                        data-testid="location"
                        type='text'
                        value={props.jobApp.location}/>               
                </div>
                <div className={jobAppDetail.item}>
                    <h5>Source Webpage</h5>
                    <input 
                        data-testid="webpage"
                        type='text'
                        value={props.jobApp.webpage}/>               
                </div>
            </div>
            <div className={jobAppDetail.itemContainer3}>
                <div className={jobAppDetail.item}>
                    <h5>Contact Name</h5>
                    <input 
                        data-testid="contactName"
                        type='text'
                        value={props.jobApp.contactName}/>               
                </div>
                <div className={jobAppDetail.item}>
                    <h5>Contact Number</h5>
                    <input 
                        data-testid="contactNumber"
                        type='text'
                        value={props.jobApp.contactNumber}/>               
                </div>
                <div className={jobAppDetail.item}>
                    <h5>Application Status</h5>
                    <input 
                        data-testid="status"
                        type='text'
                        value={props.jobApp.status}/>               
                </div>
            </div>
            <div className={jobAppDetail.itemContainer2}>
                <div className={jobAppDetail.item}>
                    <h5>Job Description</h5>
                    <textarea 
                        data-testid="description"
                        value={props.jobApp.description}/>               
                </div>
                <div className={jobAppDetail.item}>
                    <h5>Notes</h5>
                    <textarea
                        data-testid="notes"
                        value={props.jobApp.notes}/>               
                </div>
            </div>
            <div className={jobAppDetail.btnContainer}>
                <button 
                    data-testid="editBtn"
                    onClick={ () => {
                        setEditState(!editState)
                    }}
                    type="button"
                    >Edit</button>
                <button data-testid="submitBtn">Submit</button>
            </div>
        </form>
    )
}

export default JobAppDetail;