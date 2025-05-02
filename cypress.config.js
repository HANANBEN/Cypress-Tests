import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import * as addCucumberPreprocessorPlugin from "@badeball/cypress-cucumber-preprocessor";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin.addCucumberPreprocessorPlugin(
        on,
        config
      );
      on(
        "file:preprocessor",
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );
      return config;
    },
  },

  env: {
    "cypress-cucumber-preprocessor": {
      stepDefinitions: "cypress/support/step_definitions",
    },
  },
});
