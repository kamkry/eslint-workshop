module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.spec.ts', '!src/index.ts', 'src/utils/testUtils.ts.ts'],
  coverageReporters: ['html', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['<rootDir>/src/**/*.spec.(ts|js)'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  reporters: ['default', 'jest-junit'],
};
