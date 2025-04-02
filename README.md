# DEMOQA Form Testing Project

## Overview

Welcome to the DEMOQA Form Testing Project! This project focuses on ensuring the reliability and quality of the DEMOQA site’s form through comprehensive testing. Using Cypress for test automation, the project covers all aspects of form validation, data integrity, and usability.

You can find the test plan [here](https://docs.google.com/document/d/1OA9RWBxu1CnFRoKqBPUA8HGQDcl0tx-5qc0GuVLuH0s/edit?usp=sharing) 

## Project Status

This is a **living project**. We are actively working on updating and expanding test cases. Automation scripts are under continuous development, and new scenarios are added regularly to enhance the testing coverage. Contributions and feedback are always welcome!

## Prerequisites

Before running the tests locally, ensure that you have the following installed:

- **Node.js & npm**: Make sure you have Node.js and npm installed. You can download them [here](https://nodejs.org/en/).
- **Cypress**: This project utilizes Cypress for testing. If you haven't installed it yet, don’t worry; we'll cover this in the installation steps.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/demoqa-form-testing.git

   Navigate to the project directory:  ```bash  cd demoqa-form-testing   `

Install the dependencies:

This command installs Cypress along with other necessary packages.

`   npm install   `

Cypress setup:

If installing Cypress for the first time, or to ensure it's set up correctly, run:

`   npx cypress install   `

Running Tests Locally
---------------------

Using Cypress GUI

Open Cypress Test Runner:

`   npx cypress open   `

This will open the Cypress Test Runner where you can manually select and run the test cases.

Select a test file:

In the Test Runner, you will see a list of available test files. Click on a test file to execute it.

Using Command Line
------------------

Run all tests:

To execute all test cases without the GUI, use the following command:

`   npx cypress run   `

Run a specific test file:

You can also specify a single test file to run:

`   npx cypress run --spec "cypress/integration/test-file.spec.js"   `

Project Contribution
--------------------

We appreciate contributions to expand and improve the testing suite. To contribute:

Fork the repository.

Create a new branch for your feature or bug fix:

`   git checkout -b feature/your-feature-name   `

Make your changes and commit them with clear messages.

Push your feature branch:
`   git push origin feature/your-feature-name   `

Submit a Pull Request with a description of your changes.

Future Developments
-------------------

We are continually enhancing our test coverage and encouraging suggestions for new test scenarios. Join us in maintaining the high quality of the DEMOQA site. Stay tuned for ongoing updates and improvements!

Support
-------

For questions, suggestions, or any kind of support, please contact us at giuliaverruck@gmail.com.

Thank you for contributing to the quality of the DEMOQA site form! Happy testing!\`\`\`
