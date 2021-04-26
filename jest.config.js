module.exports = {
    setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/styleMock.js',
    }
};