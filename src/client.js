function onReceiverReady() {
	receiver.onChangeMessage = goToSlide;
}

$(document).ready(function() {
	$('body').load('slidesclient.html', function() {
		//$('.slides section:nth-child(1)').remove();
		console.log('Ready');
		Reveal.initialize();
	});
});

function goToSlide(index) {
	Reveal.slide(index, 0);
}

var receiver = new Receiver(onReceiverReady, function(e) {
	console.log(e);
});
