export default {
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    testEnvironment: 'jsdom',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    transform: {
        '^.+\\.js$': 'babel-jest',
        '\\.(ts|tsx)$': 'ts-jest',
    },
    preset: 'ts-jest',
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    verbose: true,
    updateSnap: "jest test --updateSnapshot"
};