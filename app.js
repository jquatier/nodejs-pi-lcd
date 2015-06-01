var Lcd = require('lcd');

/*
  Example of using a 16x2 HD44780-based LCD with the Raspberry Pi B+ or A+.
*/

// configure a new 16x2 LCD display
var myLcd = new Lcd({
  rs: 20,
  e: 21,
  data: [5, 6, 13, 19],
  cols: 16,
  rows: 2
});

myLcd.on('ready', function() {
  setInterval(function() {
    myLcd.setCursor(0, 0);
    myLcd.print('Current time is:' , function() {
      myLcd.setCursor(0, 1);
      myLcd.print(new Date().toLocaleTimeString());
    });
  }, 1000);
});

// clear display on exit
process.on('SIGINT', function() {
  myLcd.clear();
  myLcd.close();
  process.exit();
});