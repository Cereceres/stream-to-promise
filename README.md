# stream-to-promise
listen the error and success event to resolve and reject promise
# API

## streamToPromise(StreamInstance, successString) -> PromiseInstance

Receive a stream and listen the success and error event to resolve and reject the promise returned.

# Example

```js
const assert = require('assert');
const EventEmitter = require('events');
const streamToPromise = require('stream-to-promise');

const emitter = new EventEmitter();
setTimeout(() => emitter.emit('successString', 'res'), 1000);
const res = await streamToPromise(emitter, 'successString');
assert(res == 'res');

```