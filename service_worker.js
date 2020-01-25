
self.addEventListener('install', function(event) {
  // Perform install steps
});


self.addEventListener('message', function(e) {
  self.postMessage(e.data);
}, false);
