# Test Doubles

An example of using Jest's mocking features in tests.

## Quick Start

```bash
$ git clone https://github.com/lund0n/test-doubles
$ cd test-doubles
$ yarn # or npm install if you're using that instead
$ yarn test # or npm test
```

## Presentation Agenda

* Types of test doubles
* Jest built-in test double support
* When to use the various types of test doubles

### Types of test doubles

1. *Stub*: a placeholder. Either does nothing, or returns the same thing every time. Can just be a regular function, or NOOP.
2. *Spy*: focused on tracking how many times a function’s been called, and what it’s called with.
3. *Mock*: it’s a spy with behavior. It tracks how it’s called, and either returns simple values (like a stub), or implements more complex behavior.

## List of Examples

* Using hand-rolled code:
  * Stubs [link](https://github.com/lund0n/test-doubles/blob/master/src/stubs-fns.test.js)
  * Spies [link](https://github.com/lund0n/test-doubles/blob/master/src/spy-fns.test.js)
  * Mocks [link](https://github.com/lund0n/test-doubles/blob/master/src/mock-fns.test.js)
* Using Jest mocks:
  * Stubs [link](https://github.com/lund0n/test-doubles/blob/master/src/stubs-jest.test.js)
  * Spies [link](https://github.com/lund0n/test-doubles/blob/master/src/spy-jest.test.js)
  * Mocks [link](https://github.com/lund0n/test-doubles/blob/master/src/mock-jest.test.js)
* Complex Jest mock (using Promises, multiple return values) [link](https://github.com/lund0n/test-doubles/blob/master/src/random-user.test.js)
* Jest auto-mock feature [link](https://github.com/lund0n/test-doubles/blob/master/src/api.test.js)
* Jest virual auto-mocking [link](https://github.com/lund0n/test-doubles/blob/master/src/custom-mocks.test.js)

*NOTE*: some of the examples may not be completed, as they are demonstrated as part of the training presentation.
