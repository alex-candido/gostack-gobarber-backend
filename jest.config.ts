import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/modules/**/services/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: [
    "text-summary",
    "lcov"
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths,{prefix: '<rootDir>/src/'}),
  preset: 'ts-jest',
  testEnvironment: "node",
  testMatch: ['**/*.spec.ts'],
};

export default config;
