const textDisplay = document.getElementById('overlay');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.continuous = true;

recognition.onresult = function(event) {
  const transcript = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    
  textDisplay.textContent = transcript;
};

recognition.onerror = function(event) {
  console.error('Speech recognition error:', event.error);
};

recognition.start();

// Restart recognition if it ends
recognition.onend = function() {
  recognition.start();
};