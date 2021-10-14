import React from 'react';
import Dashboard from './Dashboard';
import {act, getAllByTestId, render, getNodeText, getByTestId} from '@testing-library/react';
import apiClient from '../../services/apiClient';

let container = null;

beforeEach( async () =>{

    jest.spyOn(apiClient, 'getApps').mockImplementation(()=>{
        return Promise.resolve([
            {
                company: "test company 1",
                jobTitle: "test job title 1",
                location: "test location 1",
                salary: "test salary 1",
                status: "test status 1"
            },
            {
                company: "test company 2",
                jobTitle: "test job title 2",
                location: "test location 2",
                salary: "test salary 2",
                status: "test status 2"
            },
            {
                company: "test company 3",
                jobTitle: "test job title 3",
                location: "test location 3",
                salary: "test salary 3",
                status: "test status 3"
            },
            {
                company: "test company 4",
                jobTitle: "test job title 4",
                location: "test location 4",
                salary: "test salary 4",
                status: "test status 4"
            }
        ])
    })

    container = render(<Dashboard/>).container;


    // when testing, code that causes React state updates should be wrapped into act()
    await act(async() => {});
});


it('should show page title', () => {

    const title = getByTestId(container, 'title');

    expect(getNodeText(title)).toBe('Job Applications');
})

it('should show search', ()=> {
    expect(getByTestId(container, 'search')).toBeTruthy();
})

it('should show filters', ()=>{
    expect(getByTestId(container, 'date-type')).toBeTruthy();
    expect(getByTestId(container, 'company-type')).toBeTruthy();
    expect(getByTestId(container, 'job-title-type')).toBeTruthy();
    expect(getByTestId(container, 'location-type')).toBeTruthy();
    expect(getByTestId(container, 'stage-type')).toBeTruthy();
})


it('should show job applications submitted by the user', () => {

    const jobApps = getAllByTestId(container, 'job-app');

    expect(jobApps.length).toBeGreaterThan(0);
});

it('should show company name of job applications', () => {

    /*
    to test that the name of the company renders, 
    we get the text of the node of the first company name 
    */
   
    const companyNames = getAllByTestId(container, 'company-name');
    
    expect(getNodeText(companyNames[0])).toBe('test company 1');
});

it('should show job title of job applications', () => {

    const jobTitles = getAllByTestId(container, 'job-title');
    
    expect(getNodeText(jobTitles[0])).toBe('test job title 1');
});

it('should show location of job applications', () => {

    const locations = getAllByTestId(container, 'location');
    
    expect(getNodeText(locations[0])).toBe('test location 1');
});

it('should show salary of job applications', () => {

    const salaries = getAllByTestId(container, 'salary');
    
    expect(getNodeText(salaries[0])).toBe('test salary 1');
});

it('should show status of job applications', () => {

    const status = getAllByTestId(container, 'status');
    
    expect(getNodeText(status[0])).toBe('test status 1');
});