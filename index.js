module.exports = (stream, success = 'success') => {
  if (!stream) throw new Error('Stream is neccessary');
  if (!stream.on) throw new Error(`Stream is not valid ${stream}`);

  return new Promise((resolve, reject) => {
    stream.on('error', reject);
    stream.on(success, resolve);
  });
};
