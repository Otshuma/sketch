const textDisplay = document.getElementById('overlay');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';

recognition.interimResults = true;
recognition.continuous = true;

recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
};

recognition.start();