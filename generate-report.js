const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonDir: "cypress/results",
  output: "cypress/reports/cucumber-report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    Browser: "Chrome 90",
    Platform: "Windows 10",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
};

reporter.generate(options);
