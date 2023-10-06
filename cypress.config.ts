const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://www.demoblaze.com',
    experimentalStudio: true,
    defaultCommandTimeout: 3000
  },
  
  "reporter": "../node_modules/mochawesome/src/mochawesome.js",
  "reporterOptions": {
    "overwrite": false,
    "html": false,
    "json": true
  }
});
