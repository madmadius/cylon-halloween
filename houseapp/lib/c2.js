var Cylon = require('cylon');

Cylon.robot({
  connections: {
    edison: { adaptor: 'intel-iot' }
  },

  devices: {
    led: { driver: 'led', pin: A2 }
  },

  work: function(my) {
    every((60).second(), my.led.toggle);
  }
}).start();