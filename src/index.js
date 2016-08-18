
window.onload = function() {
  new QRCode($('#qrcode')[0], 'http://www.lipsum.com/feed/html');

  Reveal.addEventListener('ready', function(event) {
  });
  Reveal.addEventListener('slidechanged', function(event) {
    console.log(event.indexh, event.indexv);
  });
  Reveal.initialize();
}
