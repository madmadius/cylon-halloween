var Cylon = require('cylon');

Cylon.robot({
  connections: {
    edison: { adaptor: 'intel-iot' }
  },

  devices: {
    singingvoice: { driver: 'relay', pin: 13, type: "closed" },
    playwithme: { driver: 'relay', pin: 12, type: "closed" },
    led: { driver: 'relay', pin: 11, type: "closed" },
  },

  work: function(my) {
    every((60).second(), my.singingvoice.toggle);
  }
}).start();