/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts$': ['ts-jest', { isolatedModules:true }]
  },
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ['text', 'text-summary', 'lcov', 'html'],
  collectCoverageFrom: [
    'src/*.ts',
    'src/helpers/*.ts',
    'src/models/*.ts',
    'src/services/*.ts'
  ],
  testTimeout: 60000,
  testPathIgnorePatterns: [
    '/tests/events.test.ts',
    '/tests/sonos-device-notification.test.ts',
  ]
};