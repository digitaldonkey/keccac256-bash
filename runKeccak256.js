const createKeccakHash = require('keccak');
const shell = require('shelljs');

var string = process.argv[2];

if (!string && string !== '') {
  shell.exit(1);
}
else {
  shell.echo(createKeccakHash('keccak256').update(string).digest('hex'));
  shell.exit(0);
}
