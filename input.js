let connection;
let timoutObj = {};
const { stdin } = require("process")

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    clearInterval(timoutObj);
    timoutObj = (timoutObj = setInterval(() => {
      connection.write('Move: up');
    }, 100));
  }
  if (key === 'a') {
    clearInterval(timoutObj);
    timoutObj = (timoutObj = setInterval(() => {
      connection.write('Move: left');
    }, 100));
  }
  if (key === 'd') {
    clearInterval(timoutObj);
    timoutObj = (timoutObj = setInterval(() => {
      connection.write('Move: right');
    }, 100));
  }
  if (key === 's') {
    clearInterval(timoutObj);
    timoutObj = (timoutObj = setInterval(() => {
      connection.write('Move: down');
    }, 100));
  }
  if (key === 'q') {
    connection.write('Say: :)')
  }
  if (key === 'e') {
    connection.write('Say: :(')
  }
  if (key === 'z') {
    connection.write('Say: Look out!')
  }
  if (key === 'x') {
    connection.write('Say: Goodbye!')
  }
};

module.exports = { 
  setupInput, 
};