module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    '~components': '<rootDir>/src/components/index',
  },
  rootDir: '.',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {'^.+\\.tsx?$': 'babel-jest'},
}
