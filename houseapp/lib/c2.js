var Cylon = require('cylon');

Cylon.api("http", {
	host: '192.168.0.32',
	port: '4321',
});

Cylon.robot({
	connections: {
		edison: {
			adaptor: 'intel-iot'
		}
	},

	devices: {
		singingvoice: {
			driver: 'relay',
			pin: 16,
			type: "closed"
		},
		playwithme: {
			driver: 'relay',
			pin: 17,
			type: "closed"
		},
		led: { driver: 'led', pin: 10},
		//
		//ELwire on pins 2-9 
		elwireVoice1: {
			driver: 'led',
			pin: 2,

		},
		elwireVoice2: {
			driver: 'direct-pin',
			pin: 3
		},
		elwireVoice3: {
			driver: 'direct-pin',
			pin: 4
		},
		elwireVoice4: {
			driver: 'direct-pin',
			pin: 5
		},
		elwireVoice5: {
			driver: 'direct-pin',
			pin: 6
		},
		elwireVoice6: {
			driver: 'direct-pin',
			pin: 7
		},
		elwireVoice7: {
			driver: 'direct-pin',
			pin: 8
		},
		elwireVoice8: {
			driver: 'led',
			pin: 9
		}
	},

	work: function(my) {
		//every((2).second(), my.led.turnOn());
		//every((3).second(), my.led.turnOff());
		//every((5).second(), my.elwireVoice1.turnOn());
		//every((2).second(), my.elwireVoice1.turnOff());
		//every((5).second(), my.elwireVoice8.turnOn());
		//every((2).second(), my.elwireVoice8.turnOff());
	}
}).start();