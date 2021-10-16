import React from 'react';
import {getByTestId, render} from '@testing-library/react';
import JobAppDetail from './JobAppDetail.js';

let container = null;

const mockedJobApp = {
    company: "test company 1",
    jobTitle: "test job title 1",
    location: "test location 1",
    salary: "test salary 1",
    status: "test status 1",
    webpage: "test webpage 1",
    contactName: "test contact name 1",
    contactNumber: "test contact number 1",
    description: "test description 1",
    notes: "test notes 1"
}

beforeEach(() =>{

    container = render(<JobAppDetail jobApp={mockedJobApp}/>).container
});

it('should show company name', () => {
    expect(getByTestId(container, 'company').value).toBe("test company 1");
})

it('should show job title', () => {
    expect(getByTestId(container, 'jobTitle').value).toBe("test job title 1");
})

it('should show expected salary', () => {
    expect(getByTestId(container, 'salary').value).toBe("test salary 1");
})

it('should show job location', () => {
    expect(getByTestId(container, 'location').value).toBe("test location 1");
})

it('should show source webpage', () => {
    expect(getByTestId(container, 'webpage').value).toBe("test webpage 1");
})

it('should show contact name', () => {
    expect(getByTestId(container, 'contactName').value).toBe("test contact name 1");
})

it('should show contact number', () => {
    expect(getByTestId(container, 'contactNumber').value).toBe("test contact number 1");
})

it('should show job description', () => {
    expect(getByTestId(container, 'description').value).toBe("test description 1");
})

it('should show notes', () => {
    expect(getByTestId(container, 'notes').value).toBe("test notes 1");
})

it('should show application status', () => {
    expect(getByTestId(container, 'status').value).toBe("test status 1");
})

it("should show job app edit button", () => {

    const jobAddBtn = getByTestId(container, "editBtn");
  
    expect(jobAddBtn).toBeTruthy;
  });

  it("should show job app submit button", () => {

    const submitBtn = getByTestId(container, "submitBtn");
  
    expect(submitBtn).toBeTruthy;
  });

//should show company name
//should show job title
//should show expected salary
//should show location
//should show source webpage
//should show contact Name
//should show contact number
//should show description
//should show notes
//should show application status
//should show edit button
//should show submit button