const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.{feature,cy.js,spec.js}',
    setupNodeEvents(on, config) { 
      config.env = config.env || {}
      config.env.BASE_URL = process.env.BASE_URL
      config.env.USER_EMAIL = process.env.USER_EMAIL
      config.env.USER_PASSWORD = process.env.USER_PASSWORD
      return config
    },
  },
})