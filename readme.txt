PoC for the SAUCEDEMO - (https://www.saucedemo.com/) 
Author: Sandra Castro B      
Framework: Cypress v12.8.1
Node Version: v18.15.0

Description
This is a PoC built for a technical test to apply for the QA Assurance job offer

Get started
- Download the .zip: https://drive.google.com/file/d/1lLw5GpYWKMw-HmkY--fA_a1RURDcFh1A/view?usp=sharing 
- Install dependencies: npm install
- Install Cypress: npm install cypress --save-dev

Run the Project
Run the project using one of the following options:
- Run All tests without the browser, faster: npx cypress run --headless
- Run specific test in the browser: npx cypress run --spec './cypress/e2e/purchaseFlow.cy.js' --headed