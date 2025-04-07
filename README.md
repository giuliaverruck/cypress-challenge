# DEMOQA Testing Project

Ensuring Quality Through Automation

-----------------------------------------------------------

## Overview

Welcome to the DEMOQA Testing Project! This project focuses on ensuring the reliability and quality of the DEMOQA site through comprehensive testing.  Using Cypress for test automation, the project covers aspects of validation, data integrity, and usability.

**Project Status:** This is a living project! We are actively updating and expanding test cases. Automation scripts are under continuous development, and new scenarios are added regularly to enhance testing coverage. Contributions and feedback are always welcome!

**Test Plan:** You can find the test plan [here](https://docs.google.com/document/d/1OA9RWBxu1CnFRoKqBPUA8HGQDcl0tx-5qc0GuVLuH0s/edit?usp=sharing)

-----------------------------------------------------------

## Technologies

*   Automation Framework: Cypress
*   Test Runner: Cypress Test Runner
*   Language: JavaScript

-----------------------------------------------------------

## Prerequisites

Before running tests locally, ensure you have the following installed:

*   **Node.js & npm:** Make sure you have Node.js and npm installed. You can download them [here](https://nodejs.org/en/).

-----------------------------------------------------------

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/demoqa--testing.git
    ```
2.  **Navigate to the project directory:**

    ```bash
    cd cypress-challenge
    ```
3.  **Install the dependencies:**

    ```bash
    npm install
    ```

    This command installs Cypress along with other necessary packages.

4.  **Cypress setup:**

    If installing Cypress for the first time, or to ensure it's set up correctly, run:

    ```bash
    npx cypress install
    ```

-----------------------------------------------------------

## Running Tests Locally

#### Using Cypress GUI

1.  **Open Cypress Test Runner:**

    ```bash
    npx cypress open
    ```

    This will open the Cypress Test Runner where you can manually select and run test cases.
2.  **Select a test file:**

    In the Test Runner, you will see a list of available test files. Click on a test file to execute it.

#### Using Command Line

1.  **Run all tests:**

    To execute all test cases without the GUI, use the following command:

    ```bash
    npx cypress run
    ```
2.  **Run a specific test file:**

    You can also specify a single test file to run:

    ```bash
    npx cypress run --spec "cypress/integration/test-file.spec.js"
    ```

-----------------------------------------------------------

## Project Contribution

We appreciate contributions to expand and improve the testing suite! To contribute:

1.  **Fork the repository.**
2.  **Create a new branch** for your feature or bug fix:

    ```bash
    git checkout -b feature/your-feature-name
    ```
3.  **Make your changes** and commit them with clear messages.
4.  **Push your feature branch:**

    ```bash
    git push origin feature/your-feature-name
    ```
5.  **Submit a Pull Request** with a description of your changes.

-----------------------------------------------------------

## Future Developments

We are continually enhancing our test coverage and encouraging suggestions for new test scenarios. Join us in maintaining the high quality of the DEMOQA site. Stay tuned for ongoing updates and improvements!

-----------------------------------------------------------

## Support

For questions, suggestions, or any kind of support, please contact us at giuliaverruck@gmail.com.

Thank you for contributing to the quality of the DEMOQA site! Happy testing!
