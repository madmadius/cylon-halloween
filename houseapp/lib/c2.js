var Cylon = require('cylon');

Cylon.api("http", {
  host: '192.168.0.32',
  port: '4321',
});

Cylon.robot({
  connections: {
    edison: { adaptor: 'intel-iot' }
  },

  devices: {
    singingvoice: { driver: 'relay', pin: 16, type: "closed" },
    playwithme: { driver: 'relay', pin: 17, type: "closed" },
    //led: { driver: 'relay', pin: 18, type: "closed" },
    //
    //
    elwireVoice1: {drivers:'direct-pin', pin:2},
    elwireVoice2: {drivers:'direct-pin', pin:3},
    elwireVoice3: {drivers:'direct-pin', pin:4},
    elwireVoice4: {drivers:'direct-pin', pin:5},
    elwireVoice5: {drivers:'direct-pin', pin:6},
    elwireVoice6: {drivers:'direct-pin', pin:7},
    elwireVoice7: {drivers:'direct-pin', pin:8},
    elwireVoice8: {drivers:'direct-pin', pin:9}
  },

  work: function(my) {
    //every((75).second(), my.singingvoice.toggle);
  }
}).start();