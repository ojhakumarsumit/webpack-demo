const path = require('path');

module.exports = {
  entry: './mentee.js', // entry mentee.js is where you will write your JS code

  output: {     // This is what your html will see at the end.
    path: path.resolve(__dirname),
    filename: '_bundle.js', // output _bundle.js is your final bundle generated by webpack. 
  }
}