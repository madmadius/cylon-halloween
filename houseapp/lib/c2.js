var Cylon = require('cylon');

Cylon.robot({
  connections: {
    edison: { adaptor: 'intel-iot' }
  },

  devices: {
    singingvoice: { driver: 'relay', pin: 16, type: "closed" },
    playwithme: { driver: 'relay', pin: 17, type: "closed" },
    led: { driver: 'relay', pin: 18, type: "closed" },
  },

  work: function(my) {
    every((15).second(), my.singingvoice.toggle);
  }
}).start();