const assert = require('assert');
const EventEmitter = require('events');
const streamToPromise = require('./index');

describe('', () => {
  it('should resolve the promise', async () => {
    const emitter = new EventEmitter();
    setTimeout(() => emitter.emit('success', 'res'), 1000);
    const res = await streamToPromise(emitter);
    assert(res == 'res');
  });
});
