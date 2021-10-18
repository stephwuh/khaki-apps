import React from 'react';
import {getByTestId, render, fireEvent, cleanup, unmount} from '@testing-library/react';
import JobAppDetail from './JobAppDetail.js';
import apiClient from '../../services/apiClient.js';

let container = null;

const mockedJobApp = {
    id: 1,
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

afterEach(() => {
    cleanup();
});

describe('job app detail dialog box', ()=>{

    it('should show saved company name', () => {
        expect(getByTestId(container, 'company').value).toBe("test company 1");
    })
    
    it('should show saved job title', () => {
        expect(getByTestId(container, 'jobTitle').value).toBe("test job title 1");
    })
    
    it('should show saved expected salary', () => {
        expect(getByTestId(container, 'salary').value).toBe("test salary 1");
    })
    
    it('should show saved job location', () => {
        expect(getByTestId(container, 'location').value).toBe("test location 1");
    })
    
    it('should show saved source webpage', () => {
        expect(getByTestId(container, 'webpage').value).toBe("test webpage 1");
    })
    
    it('should show saved contact name', () => {
        expect(getByTestId(container, 'contactName').value).toBe("test contact name 1");
    })
    
    it('should show saved contact number', () => {
        expect(getByTestId(container, 'contactNumber').value).toBe("test contact number 1");
    })
    
    it('should show saved job description', () => {
        expect(getByTestId(container, 'description').value).toBe("test description 1");
    })
    
    it('should show saved notes', () => {
        expect(getByTestId(container, 'notes').value).toBe("test notes 1");
    })
    
    it('should show saved application status', () => {
        expect(getByTestId(container, 'status').value).toBe("test status 1");
    })

})

describe('job app add new dialog box', ()=>{



    it('company name input box should be blank', () => {
        expect(getByTestId(container, 'company').value).toBe("test company 1");
    })
    
    it('should show saved job title', () => {
        expect(getByTestId(container, 'jobTitle').value).toBe("test job title 1");
    })
    
    it('should show saved expected salary', () => {
        expect(getByTestId(container, 'salary').value).toBe("test salary 1");
    })
    
    it('should show saved job location', () => {
        expect(getByTestId(container, 'location').value).toBe("test location 1");
    })
    
    it('should show saved source webpage', () => {
        expect(getByTestId(container, 'webpage').value).toBe("test webpage 1");
    })
    
    it('should show saved contact name', () => {
        expect(getByTestId(container, 'contactName').value).toBe("test contact name 1");
    })
    
    it('should show saved contact number', () => {
        expect(getByTestId(container, 'contactNumber').value).toBe("test contact number 1");
    })
    
    it('should show saved job description', () => {
        expect(getByTestId(container, 'description').value).toBe("test description 1");
    })
    
    it('should show saved notes', () => {
        expect(getByTestId(container, 'notes').value).toBe("test notes 1");
    })
    
    it('should show saved application status', () => {
        expect(getByTestId(container, 'status').value).toBe("test status 1");
    })

})



it("should show job app edit button", () => {

    const editBtn = getByTestId(container, "editBtn");

    expect(editBtn).toBeTruthy;
  });

it("should show job app submit button", () => {

const submitBtn = getByTestId(container, "submitBtn");

expect(submitBtn).toBeTruthy;
});


// fixing 'cannot read properties of null' error

it('should show empty when no application provided', ()=>{

    container = render(<JobAppDetail jobApp={null} />).container;

    expect(getByTestId(container, 'empty')).toBeTruthy();

})


describe('content should be editable after edit button is clicked', ()=> {

    beforeEach(() =>{


        const editBtn = getByTestId(container, "editBtn");
        editBtn.click();

    });

    it("company name is editable", () => {

        const company = getByTestId(container, 'company');

        expect(company.getAttribute('disabled')).toEqual(null);

        // fireEvent.change(
        //     company,
        //     {target: {value: 'updated company name'}}
        // );

        // expect(company.value).toBe('updated company name');

    });

    it("job title is editable", () => {

        const jobTitle = getByTestId(container, 'jobTitle');

        expect(jobTitle.getAttribute('disabled')).toEqual(null);

        // fireEvent.change(
        //     jobTitle,
        //     {target: {value: 'updated job title'}}
        // );

        // expect(jobTitle.value).toBe('updated job title');

    });

    it("expected salary is editable", () => {

        const salary = getByTestId(container, 'salary');

        expect(salary.getAttribute('disabled')).toEqual(null);

        // fireEvent.change(
        //     salary,
        //     {target: {value: 'updated salary'}}
        // );

        // expect(salary.value).toBe('updated salary');

    });

    it("location is editable", () => {

        const location = getByTestId(container, 'location');

        expect(location.getAttribute('disabled')).toEqual(null);

        // fireEvent.change(
        //     location,
        //     {target: {value: 'updated location'}}
        // );

        // expect(location.value).toBe('updated location');

    });

    it("source webpage is editable", () => {

        const webpage = getByTestId(container, 'webpage');

        expect(webpage.getAttribute('disabled')).toEqual(null);

        // fireEvent.change(
        //     webpage,
        //     {target: {value: 'updated source webpage'}}
        // );

        // expect(webpage.value).toBe('updated source webpage');

    });

    it("contact name is editable", () => {

        const contactName = getByTestId(container, 'contactName');

        expect(contactName.getAttribute('disabled')).toEqual(null);

        // fireEvent.change(
        //     contactName,
        //     {target: {value: 'updated contact name'}}
        // );

        // expect(contactName.value).toBe('updated contact name');

    });

    it("contact number is editable", () => {

        const contactNumber = getByTestId(container, 'contactNumber');

        expect(contactNumber.getAttribute('disabled')).toEqual(null);

        // fireEvent.change(
        //     contactNumber,
        //     {target: {value: 'updated contact number'}}
        // );

        // expect(contactNumber.value).toBe('updated contact number');

    });

    it("application status is editable", () => {

        const status = getByTestId(container, 'status');

        expect(status.getAttribute('disabled')).toEqual(null);

        // fireEvent.change(
        //     status,
        //     {target: {value: 'updated application status'}}
        // );

        // expect(status.value).toBe('updated application status');

    });

    it("job description is editable", () => {

        const description = getByTestId(container, 'description');

        expect(description.getAttribute('disabled')).toEqual(null);

        // fireEvent.change(
        //     description,
        //     {target: {value: 'updated description'}}
        // );

        // expect(description.value).toBe('updated description');

    });

    it("notes is editable", () => {

        const notes = getByTestId(container, 'notes');

        expect(notes.getAttribute('disabled')).toEqual(null);

        // fireEvent.change(
        //     notes,
        //     {target: {value: 'updated notes'}}
        // );

        // expect(notes.value).toBe('updated notes');

    });

})

//do i have to go through the act of clicking the edit button
//making an update then clicking on the submit button?


describe('submit button', () => {

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('should be disabled when not editing', ()=> {

        const submitBtn = getByTestId(container, 'submitBtn');

        expect(submitBtn.getAttribute('disabled')).toEqual("");

    })



    it('should submit the form after clicking submit button', ()=>{


        // const editBtn = getByTestId(container, "editBtn");

        // editBtn.click();

        // const company = getByTestId(container, 'company');

        // fireEvent.change(
        //     company,
        //     {target: {value: 'updated company name'}}
        // );

        // const jobTitle = getByTestId(container, 'jobTitle');

        //     fireEvent.change(
        //         jobTitle,
        //         {target: {value: 'updated job title'}}
        //     );

        // const salary = getByTestId(container, 'salary');

        // fireEvent.change(
        //     salary,
        //     {target: {value: 'updated salary'}}
        // );

        // const location = getByTestId(container, 'location');

        // fireEvent.change(
        //     location,
        //     {target: {value: 'updated location'}}
        // );

        // const webpage = getByTestId(container, 'webpage');

        // fireEvent.change(
        //     webpage,
        //     {target: {value: 'updated source webpage'}}
        // );

        // const contactName = getByTestId(container, 'contactName');

        // fireEvent.change(
        //     contactName,
        //     {target: {value: 'updated contact name'}}
        // );


        // const contactNumber = getByTestId(container, 'contactNumber');

        // fireEvent.change(
        //     contactNumber,
        //     {target: {value: 'updated contact number'}}
        // );

        // const status = getByTestId(container, 'status');

        // fireEvent.change(
        //     status,
        //     {target: {value: 'updated application status'}}
        // );

        // const description = getByTestId(container, 'description');

        // fireEvent.change(
        //     description,
        //     {target: {value: 'updated description'}}
        // );

        // const notes = getByTestId(container, 'notes');

        // fireEvent.change(
        //     notes,
        //     {target: {value: 'updated notes'}}
        // );

        const submittedMockedJobApp = {
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

        jest.spyOn(apiClient, "updateJobApp").mockImplementation(() => {

            return Promise.resolve();

        });

        const editBtn = getByTestId(container, "editBtn");
        editBtn.click();

        const submitBtn = getByTestId(container, 'submitBtn');

    
        submitBtn.click();

        expect(apiClient.updateJobApp).toHaveBeenCalledWith(mockedJobApp.id,submittedMockedJobApp);

    })

})




