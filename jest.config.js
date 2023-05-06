/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  transform: {
		'^.+\\.m?[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json'
      },
    ],
	},
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  setupFiles: [
    "dotenv/config",
    "./jest.setup.js"
  ],
};