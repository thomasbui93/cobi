module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  setupFiles: [
    '<rootDir>/config/polyfills.js',
    '<rootDir>/config/jest/jest.setup.js', 
    'jest-localstorage-mock'
  ],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverageFrom: [
    "src/**/*.{js,jsx}"
  ],
  testMatch: [
    "<rootDir>/tests/**/*.js?(x)"
  ],
  "testEnvironment": "node",
  "testURL": "http://localhost",
  "transform": {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"
  ],
  "moduleNameMapper": {
    "^react-native$": "react-native-web"
  },
  "moduleFileExtensions": [
    "web.js",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ]
}