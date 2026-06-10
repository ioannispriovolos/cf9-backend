"use strict";
/**@type {import('jest').Config} */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src/tests'],
    moduleExtensions: ['ts', 'js', 'json'],
    testMatch: ['**/*.test.ts'],
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/src/tests/testSetup.ts'],
    transform: { '^.+\\.tsx?$': 'ts-jest' },
    coveragePathIgnorePatterns: ['/node_modules/'],
    runInBand: true,
    collectCoverage: true
};
//# sourceMappingURL=jest.config.js.map