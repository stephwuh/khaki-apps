
# Job Application Tracker

This frontend only React web application allows users to track their job applications.

I worked on this seemingly simple project to practice test driven development and unit testing with Jest 
and RTL (React Testing Library), as well as practice using Bootstrap to easily apply styling and mobile responsiveness.

Regarding test driven development, I made sure to ahere to the following process: 
(1) write failing unit tests of test cases based on software requirements
using the arrange-act-assert pattern, (2) write production code to make the unit test pass, (3) refactor to eliminate duplicate code, etc. (4) repeat steps 1~3.

Each unit test tests for a specific behavior, whether it's making sure the input 
text box renders as planned or the filter function works properly. In order to drown 
out the noise that might affect the outcome of the test, I isolate each test so they are 
not dependent on each other and control for external dependencies using mock data and 
functions. 






## Features

- Create, save, delete job applications.
- Get an overview of all job applications from the job application board. 
- Filter saved job applications from job application board with filter buttons or text inputed by the user.

<span>
  <img src="https://user-images.githubusercontent.com/56822167/139295289-a4f8fc92-cb66-4599-a134-15f450b12cff.PNG" width="500"/>
  <img src="https://user-images.githubusercontent.com/56822167/139295297-7f176ef9-bca1-4aa0-9c37-eb0d09a238ee.PNG" width="500"/>
</span>
