var Cylon = require('cylon');

Cylon.api("http", {
  port: '4321'
});

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
    //every((75).second(), my.singingvoice.toggle);
  }
}).start();