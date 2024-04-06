/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.test.json"
            },
        ],
    },
    testEnvironment: "node",
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    setupFiles: [
        "dotenv/config"
    ],
    // 3 minute
    testTimeout: 3 * 60 * 1000
}