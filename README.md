# E2E Testing with Cypress

Hello there 👋

This is a framework for functional testing for Web UI testing using Cypress.

## Installation

Clone repo
```bash
git clone https://github.com/erikAlberto/e2e-teting-cypress.git
```
Install dependencies
```bash
npm install
```

## Usage
Run the test on heatless mode
```javascript
npm run cy:run
```
Run the test by opening a browser
```javascript
npm run cy:run
```
To run test and generate Html report run the follow commands:
```javascript
npm run test:cli
```
```javascript
npm run create:html:report
```

## SUT
For this example I use the following web app:

    https://www.demoblaze.com

Note: this URL is configured into "cypress.config.ts" file