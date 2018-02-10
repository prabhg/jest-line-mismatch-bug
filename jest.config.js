// jest.config.js
module.exports = {
    "verbose": true,
    "moduleFileExtensions": ["ts", "js", "json"],
    "transform": {
        "^.+\\.ts$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testMatch": [
        "**/test/*.ts"
    ],
    "coverageDirectory": "<rootDir>/artifacts/coverage",
    "collectCoverageFrom": [
        "src/**/*.ts"
    ],
    "coveragePathIgnorePatterns": [],
    "coverageReporters": ["lcov", "text"],
    "mapCoverage": true,
    "collectCoverage": false
};
