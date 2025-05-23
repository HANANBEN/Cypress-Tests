import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

export default defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 1000,
    video: true,
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: "cypress/support/e2e.js",

    screenshotsFolder: "cypress/reports/screenshots",
    videosFolder: "cypress/reports/videos",
    setupNodeEvents: async (on, config) => {
      await addCucumberPreprocessorPlugin(on, config, {
        json: {
          enabled: true,
          outputFolder: "cypress/reports/cucumber-json",
          filePrefix: "cucumber-json",
        },
      });
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      console.log("here is the config", config);
      return config;
    },
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
  },

  env: {
    "cypress-cucumber-preprocessor": {
      stepDefinitions: "cypress/support/step_definitions",
    },
  },
  // reporter: "mochawesome",
  // reporterOptions: {
  //   reportDir: "cypress/reports/mochawesome",
  //   overwrite: false,
  //   html: true,
  //   json: true,
  // },
});
