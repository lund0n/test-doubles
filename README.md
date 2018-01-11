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

### Why Use a Test Double?

* They can make test setup easier, particularly when dealing with complex collaborators (collaborators that have a lot of configuration or make use of remote resources)
* They introduce flexibility into how you test. You can test something that relies on an API without implementing the API first.
* They help with code isolation by ensuring that you're only have to setup and test the current component/module.
* They can aid testing non-deterministic values in deterministic way. Temporal values (`new Date()`, `Date.now()`) and random values provide a particular challenge. Replacing a random call with a dice that always rolls "6" is easier work with.
* They can improve testing performance. If the code under test is calling a collaborator that contains time-intensive code, replacing it with a friendlier, lightweight version will make the code faster to test. Slow tests don't get executed frequently.

### Types of Test Doubles

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
* Jest virtual auto-mocking [link](https://github.com/lund0n/test-doubles/blob/master/src/custom-mocks.test.js)

*NOTE*: some of the examples may not be completed, as they are demonstrated as part of the training presentation.
