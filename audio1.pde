/*
fht_adc_serial.pde
guest openmusiclabs.com 7.7.14
example sketch for testing the fht library.
it takes in data on ADC0 (Analog0) and processes them
with the fht. the data is sent out over the serial
port at 115.2kb.
*/

#define LOG_OUT 1 // use the log output function
#define FHT_N 16 // set to 128 point fht (gives 64 freq bins)
#define cbi(sfr, bit) (_SFR_BYTE(sfr) &= ~_BV(bit))
#define sbi(sfr, bit) (_SFR_BYTE(sfr) |= _BV(bit))

#include <FHT.h> // include the library

unsigned long StartTime = 0;
unsigned long EndTime = 0;

void setup() {
// set prescaler to 32 for a sample rate of 38.4kHz (BW = 19.2kHz)
   sbi(ADCSRA,ADPS2);
   cbi(ADCSRA,ADPS1);
   sbi(ADCSRA,ADPS0);

/*
Prescale  ADPS2,1,0  Clock MHz)  Sampling rate (KHz)
  2 	  0 0 1 	8 	  615
  4 	  0 1 0 	4 	  307
  8 	  0 1 1 	2 	  153
  16 	  1 0 0 	1 	  76.8
  32 	  1 0 1 	0.5 	  38.4 <
  64 	  1 1 0 	0.25 	  19.2
  128 	  1 1 1 	0.125 	  9.6 (default)
*/
 
  Serial.begin(9600); // use the serial port
  TIMSK0 = 0; // turn off timer0 for lower jitter
  ADCSRA = 0xe5; // set the adc to free running mode
  ADMUX = 0x40; // use adc0
  DIDR0 = 0x01; // turn off the digital input for adc0
} // end Setup

void loop() {
  while(1) { // reduces jitter
    cli();  // UDRE interrupt slows this way down on arduino1.0
    for (int i = 0 ; i < FHT_N ; i++) { // save 256 samples
      while(!(ADCSRA & 0x10)); // wait for adc to be ready
      ADCSRA = 0xf5; // restart adc
      byte m = ADCL; // fetch adc data
      byte j = ADCH;
      int k = (j << 8) | m; // form into an int
      k -= 0x0200; // form into a signed int
      k <<= 6; // form into a 16b signed int
      fht_input[i] = k; // put real data into bins
    }
    fht_window(); // window the data for better frequency response
    fht_reorder(); // reorder the data before doing the fht
    fht_run(); // process the data in the fht
    fht_mag_log(); // take the output of the fht
    sei();
    
    for (byte i = 0 ; i < FHT_N/2 ; i++) {
      static char stmp[16];
      sprintf(stmp,"%3d ",fht_log_out[i]); // send out the data
      Serial.print(stmp);
    }

     Serial.println();
  }
}