function changeMessage(message) {
	emitter.setMessage(message);
}

function onReceiverReady() {
	// receiver.stream.disconnect(receiver.analyser);
	// emitter.oscillator.connect(receiver.analyser);
	// delete receiver.stream;
	
	emitter.start();
	//receiver.onChangeMessage = onChangeMessage();
}

function onChangeMessage(m) {
	console.log('new message:', m);
}

$(document).ready(function() {
	$('body').load('slides.html', function() {

		//creating qrcode for the client
	    var url = window.location.href;
	    url = url.replace('presentation', 'client');
	    new QRCode($('#qrcode')[0], url);

    Reveal.addEventListener('ready', function(event) {
      console.log('slides ready');
    });
    Reveal.addEventListener('slidechanged', function(event) {
      console.log(event.indexh, event.indexv);
      changeMessage(event.indexh);
    });

    Reveal.initialize();
  });
});

var audioWM = new AudioWM();
var emitter = new Emitter(audioWM.context);
var receiver = new Receiver(onReceiverReady, function(e) {
	console.log(e);
});

console.log('initialized');
