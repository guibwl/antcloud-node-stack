'use strict';

const action = process.argv[2];
console.log(require.resolve('ms'));

if (action === 'start') {
  console.info('server.js start');
}

if (action === 'stop') {
  console.info('server.js stop');
}
