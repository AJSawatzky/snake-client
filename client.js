const net = require("net");
const { isPromise } = require("util/types");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });
conn.on('connect', () => {
  console.log('Successfuly connected to game server')
  });
  conn.on('connect', () => {
    conn.write("Name: AJS")
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect()

module.exports = {connect} 