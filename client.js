const net = require("net");
const { IP, PORT } = require('./constants');


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  
conn.on('connect', () => {
  console.log('Successfuly connected to game server!')
  });  

  conn.on('connect', () => {
    conn.write('Name: AJS');
  });

  conn.on('data', () => {
    conn.write('client disconnected from server')
  });
  
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { 
  connect,
};