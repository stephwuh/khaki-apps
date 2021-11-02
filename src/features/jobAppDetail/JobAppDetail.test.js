import React from "react";
import {
  getByTestId,
  render,
  cleanup,
  queryByTestId,
} from "@testing-library/react";
import JobAppDetail from "./JobAppDetail.js";
import apiClient from "../../services/apiClient.js";

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
  notes: "test notes 1",
};

beforeEach(() => {
  container = render(
    <JobAppDetail jobApp={mockedJobApp} jobDetailFormState="update" />
  ).container;
});

afterEach(() => {
  cleanup();
});

describe("job app detail dialog box", () => {
  it("should show saved company name", () => {
    expect(getByTestId(container, "company").value).toBe("test company 1");
  });

  it("should show saved job title", () => {
    expect(getByTestId(container, "jobTitle").value).toBe("test job title 1");
  });

  it("should show saved expected salary", () => {
    expect(getByTestId(container, "salary").value).toBe("test salary 1");
  });

  it("should show saved job location", () => {
    expect(getByTestId(container, "location").value).toBe("test location 1");
  });

  it("should show saved source webpage", () => {
    expect(getByTestId(container, "webpage").value).toBe("test webpage 1");
  });

  it("should show saved contact name", () => {
    expect(getByTestId(container, "contactName").value).toBe(
      "test contact name 1"
    );
  });

  it("should show saved contact number", () => {
    expect(getByTestId(container, "contactNumber").value).toBe(
      "test contact number 1"
    );
  });

  it("should show saved job description", () => {
    expect(getByTestId(container, "description").value).toBe(
      "test description 1"
    );
  });

  it("should show saved notes", () => {
    expect(getByTestId(container, "notes").value).toBe("test notes 1");
  });

  it("should show saved application status", () => {
    expect(getByTestId(container, "status").value).toBe("test status 1");
  });
});

describe("add new job app dialog box", () => {
  beforeEach(() => {
    container = render(
      <JobAppDetail jobApp={{}} jobDetailFormState="add" />
    ).container;
  });

  afterEach(() => {
    cleanup();
  });

  it("company name input box should be blank", () => {
    expect(getByTestId(container, "company").value).toBe("");
  });

  it("job title input box should be blank", () => {
    expect(getByTestId(container, "jobTitle").value).toBe("");
  });

  it("expected salary input box should be blank", () => {
    expect(getByTestId(container, "salary").value).toBe("");
  });

  it("location input box should be blank", () => {
    expect(getByTestId(container, "location").value).toBe("");
  });

  it("source webpage input box should be blank", () => {
    expect(getByTestId(container, "webpage").value).toBe("");
  });

  it("contact name input box should be blank", () => {
    expect(getByTestId(container, "contactName").value).toBe("");
  });

  it("contact number input box should be blank", () => {
    expect(getByTestId(container, "contactNumber").value).toBe("");
  });

  it("job description text area should be blank", () => {
    expect(getByTestId(container, "description").value).toBe("");
  });

  it("notes text area should be blank", () => {
    expect(getByTestId(container, "notes").value).toBe("");
  });

  it("application status input box should be blank", () => {
    expect(getByTestId(container, "status").value).toBe("");
  });
});

it("should show job app edit button", () => {
  const editBtn = getByTestId(container, "editBtn");

  expect(editBtn).toBeTruthy;
});

it("should show job app submit button", () => {
  const submitBtn = getByTestId(container, "submitBtn");

  expect(submitBtn).toBeTruthy;
});

describe("content should be editable after edit button is clicked", () => {
  beforeEach(() => {
    const editBtn = getByTestId(container, "editBtn");
    editBtn.click();
  });

  it("company name is editable", () => {
    const company = getByTestId(container, "company");

    expect(company.getAttribute("disabled")).toEqual(null);
  });

  it("job title is editable", () => {
    const jobTitle = getByTestId(container, "jobTitle");

    expect(jobTitle.getAttribute("disabled")).toEqual(null);
  });

  it("expected salary is editable", () => {
    const salary = getByTestId(container, "salary");

    expect(salary.getAttribute("disabled")).toEqual(null);
  });

  it("location is editable", () => {
    const location = getByTestId(container, "location");

    expect(location.getAttribute("disabled")).toEqual(null);
  });

  it("source webpage is editable", () => {
    const webpage = getByTestId(container, "webpage");

    expect(webpage.getAttribute("disabled")).toEqual(null);
  });

  it("contact name is editable", () => {
    const contactName = getByTestId(container, "contactName");

    expect(contactName.getAttribute("disabled")).toEqual(null);
  });

  it("contact number is editable", () => {
    const contactNumber = getByTestId(container, "contactNumber");

    expect(contactNumber.getAttribute("disabled")).toEqual(null);
  });

  it("application status is editable", () => {
    const status = getByTestId(container, "status");

    expect(status.getAttribute("disabled")).toEqual(null);
  });

  it("job description is editable", () => {
    const description = getByTestId(container, "description");

    expect(description.getAttribute("disabled")).toEqual(null);
  });

  it("notes is editable", () => {
    const notes = getByTestId(container, "notes");

    expect(notes.getAttribute("disabled")).toEqual(null);
  });
});

describe("submit button", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be disabled when not editing", () => {
    const submitBtn = getByTestId(container, "submitBtn");

    expect(submitBtn.getAttribute("disabled")).toEqual("");
  });

  it("should submit the form after clicking submit button", () => {
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
      notes: "test notes 1",
    };

    jest.spyOn(apiClient, "updateJobApp").mockImplementation(() => {
      return Promise.resolve();
    });

    const editBtn = getByTestId(container, "editBtn");
    editBtn.click();

    const submitBtn = getByTestId(container, "submitBtn");

    submitBtn.click();

    expect(apiClient.updateJobApp).toHaveBeenCalledWith(
      mockedJobApp.id,
      submittedMockedJobApp
    );
  });
});

describe("delete button", () => {
  it("should not appear when adding new job app", () => {
    container = render(
      <JobAppDetail jobApp={{}} jobDetailFormState="add" />
    ).container;

    const deleteBtn = queryByTestId(container, "deleteBtn");

    expect(deleteBtn).toEqual(null);
  });

  it("should be disabled when not editing", () => {
    const deleteBtn = getByTestId(container, "deleteBtn");

    expect(deleteBtn.getAttribute("disabled")).toEqual("");
  });

  it("should delete after clicking ", () => {
    jest.spyOn(apiClient, "deleteJobApp").mockImplementation(() => {
      return Promise.resolve();
    });

    const editBtn = getByTestId(container, "editBtn");
    editBtn.click();

    const deleteBtn = getByTestId(container, "deleteBtn");

    deleteBtn.click();

    expect(apiClient.deleteJobApp).toHaveBeenCalledWith(mockedJobApp.id);
  });
});
