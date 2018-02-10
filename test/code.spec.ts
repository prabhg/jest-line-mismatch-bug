'use strict';

import * as Code from '../src/code';
const Animal = require('../src/animal').default;

/***********************************************************************
 *                  HOW TO REPRODUCE
 * Tests report wrong line number if
 *    + jest.mock() or jest.genMockFromModule() are called on a module
 *    + same module is imported using "const modName = require()" syntax
 *
 * If one of the above condition is not true, reported line numbers in
 * errors are correct, i.e. if jest.mock() is never called, or if modules
 * are imported using <import ... = require(..)> or <import ... from ...>
 * syntax, the issue doesn't happen.
 *
 *                      How to test
 * First run "npm test" with both <jest.mock()> and <const ... = require()>
 * statements commented-out and notice the failed tests are reporting
 * correct line numbers. Then uncomment both <jest.mock()> and
 * <const ... = require()> statements below and rerun the tests. Notice the
 * reported line numbers of where error arises from are incorrect.
 * Play around with commenting/uncommenting jest.mock() or one of the
 * import statements.
 *
 * NOTE: the same file that is being mocked must be 'require'd in
 * <const ... = require()> syntax for issue to happen. For example, another
 * file "../src/animal" is being 'require'd in similar manner but it does
 * not cause the issue (as long as it is not "mocked")
 ************************************************************************/

// jest.mock('../src/person');                                      // uncomment this

// _____ only keep one of the following statements uncommented____
// const Person = require('../src/person').default;                 // uncomment this
// import Person = require('../src/person');
// import Person from '../src/person';

describe('[sum]', () => {
    // this test will pass
    test('should add numbers', () {
        expect(Code.sum(10, 20)).toBe(30);
    });
});


describe('[nonExistentFuncRunner]', () => {
    // this test will fail due to error in source code
    test('should select correct line number in error stack when error originates in src file', () {
        Code.nonExistentFuncRunner();
    });
});

describe('[missingFunction]', () => {
    // this test will fail due to failing expectation
    test('should select correct line number in error stack when error originates in test file', () {
        expect(false).toBe(true);
    });
});