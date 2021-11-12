import React from "react";
import Dashboard from "./Dashboard";
import {
  act,
  getAllByTestId,
  render,
  getNodeText,
  getByTestId,
  fireEvent
} from "@testing-library/react";
import apiClient from "../../services/apiClient";
import jobAppDetail from "../../services/jobAppDetail";

let container = null;

beforeEach(async () => {
  jest.spyOn(apiClient, "getApps").mockImplementation(() => {
    return Promise.resolve([
      {
        id: 1,
        company: "youtube",
        jobTitle: "test job title 1",
        location: "test location 1",
        salary: "test salary 1",
        status: "test status 1",
        webpage: "test webpage 1",
        contactName: "test contact name 1",
        contactNumber: "test contact number 1",
        description: "test description 1",
        notes: "test notes 1"
      },
      {
        id: 2,
        company: "amazon",
        jobTitle: "test job title 2",
        location: "test location 2",
        salary: "test salary 2",
        status: "test status 2",
        webpage: "test webpage 2",
        contactName: "test contact name 2",
        contactNumber: "test contact number 2",
        description: "test description 2",
        notes: "test notes 2"
      },
      {
        id: 3,
        company: "search filter test 1",
        jobTitle: "test job title 3",
        location: "test location 3",
        salary: "test salary 3",
        status: "test status 3",
        webpage: "test webpage 3",
        contactName: "test contact name 3",
        contactNumber: "test contact number 3",
        description: "test description 3",
        notes: "test notes 3"
      },
      {
        id: 4,
        company: "search filter test 2",
        jobTitle: "test job title 4",
        location: "test location 4",
        salary: "test salary 4",
        status: "test status 4",
        webpage: "test webpage 4",
        contactName: "test contact name 4",
        contactNumber: "test contact number 4",
        description: "test description 4",
        notes: "test notes 4"
      },
    ]);
  });

  container = render(<Dashboard />).container;

  // when testing, code that causes React state updates should be wrapped into act()
  await act(async () => {});
});

it("should show page title", () => {
  const title = getByTestId(container, "title");

  expect(getNodeText(title)).toBe("Job Application Board");
});

it("should show job app add button", () => {
  const jobAddBtn = getByTestId(container, "addBtn");

  expect(getByTestId(container, "addBtn")).toBeTruthy;
});

it("should show search", () => {
  expect(getByTestId(container, "search")).toBeTruthy();
});

it("should show filters", () => {
  expect(getByTestId(container, "company-type")).toBeTruthy();
  expect(getByTestId(container, "job-title-type")).toBeTruthy();
  expect(getByTestId(container, "location-type")).toBeTruthy();
  expect(getByTestId(container, "stage-type")).toBeTruthy();
});

it("should show job applications submitted by the user", () => {
  const jobApps = getAllByTestId(container, "job-app");

  expect(jobApps.length).toBeGreaterThan(0);
});

it("should show company name of job applications", () => {
  /*
    to test that the name of the company renders, 
    we get the text of the node of the first company name 
    */

  const companyNames = getAllByTestId(container, "company-name");

  expect(getNodeText(companyNames[0])).toEqual("youtube");
});

it("should show job title of job applications", () => {
  const jobTitles = getAllByTestId(container, "job-title");

  expect(getNodeText(jobTitles[0])).toBe("test job title 1");
});

it("should show location of job applications", () => {
  const locations = getAllByTestId(container, "location");

  expect(getNodeText(locations[0])).toBe("test location 1");
});

it("should show salary of job applications", () => {
  
  const salaries = getAllByTestId(container, "salary");

  expect(getNodeText(salaries[0])).toBe("test salary 1");
});

it("should show status of job applications", () => {
  const status = getAllByTestId(container, "status");

  expect(getNodeText(status[0])).toBe("test status 1");
});

it("should show job detail when clicked", ()=>{

  jest.spyOn(jobAppDetail, 'open').mockImplementation(() => {});

  const jobAppDetailLink = getAllByTestId(container, "job-app");

  jobAppDetailLink[0].click();

  expect(jobAppDetail.open).toHaveBeenCalledWith({
    id: 1,
    company: "youtube",
    jobTitle: "test job title 1",
    location: "test location 1",
    salary: "test salary 1",
    status: "test status 1",
    webpage: "test webpage 1",
    contactName: "test contact name 1",
    contactNumber: "test contact number 1",
    description: "test description 1",
    notes: "test notes 1"
  });

});

describe('add job button', ()=>{
  it('should open add job dialog box when clicked', ()=>{

  jest.spyOn(jobAppDetail, "openNew").mockImplementation(() => {});

  const jobAddBtn = getByTestId(container, "addBtn");

  jobAddBtn.click();

  expect(jobAppDetail.openNew).toHaveBeenCalled();

  });
});


describe('job app search input field', () => {

  //search filter function applies to all categories
  //but below I only tested for company name. do i need to check all categories?

  it('should filter job applications according to what was typed into the input field', ()=> {

    const search = getByTestId(container, "search");

    fireEvent.change(
      search,
      { target: {value: 'search filter test'}}
    )

    const companyNames = getAllByTestId(container, "company-name");

    expect(companyNames.length).toEqual(2);

    expect(getNodeText(companyNames[0])).toEqual('search filter test 1');

    expect(getNodeText(companyNames[1])).toEqual('search filter test 2');
    

  })
})


describe('filter buttons', () => {

  it('should filter the job apps by company name in alphabetical order when clicked', ()=> {


    //I test whether the content is rendered correctly 
    //when the company button is clicked
    //do i need to mock the sort function?

    const company = getByTestId(container, "company-type");

    company.click();

    const companyNames = getAllByTestId(container, "company-name");

    expect(getNodeText(companyNames[0])).toEqual('amazon');

    expect(getNodeText(companyNames[1])).toEqual('search filter test 1');

    expect(getNodeText(companyNames[2])).toEqual('search filter test 2');

    expect(getNodeText(companyNames[3])).toEqual('youtube');

  })
})

