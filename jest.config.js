
module.exports = {
  roots: ['<rootDir>/src/'],
  collectCoverageFrom: null,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  }
}
