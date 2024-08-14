 const buttons = document.querySelectorAll('.saregama button');

 buttons.forEach(button => {
   button.addEventListener('click', () => {
     const note = button.dataset.note;
     const audio = new Audio(`sounds/${note}.mp3`); // Replace with your audio file paths
     audio.play();
   });
 });

 //function to make sound
 function makeSound(key) {
   switch (key) {
       case 'sa': {
           let crash = new Audio("sounds/sa.mp3");
           crash.play();
           break;
       }
       case 're': {
           let kick_bass = new Audio("sounds/kick-bass.mp3");
           kick_bass.play();
           break;
       }

       case 'ga': {
           let snare = new Audio("sounds/snare.mp3");
           snare.play();
           break;
       }

       case 'ma': {
           let tom1 = new Audio("sounds/tom-1.mp3");
           tom1.play();
           break;
       }

       case 'pa': {
           let tom2 = new Audio("sounds/tom-2.mp3");
           tom2.play();
           break;
       }
       case 'dha': {
           let tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           break;
       }
       case 'ni': {
           let tom4 = new Audio("sounds/tom-4.mp3");
           tom4.play();
           break;
       }

       case 'sa(high pitch)': {
         let tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;
     }


       default:
           console.log(buttonText);
           break;
   }
 }

// const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// function playNote(note, string) {
//   const oscillator = audioContext.createOscillator();
//   oscillator.type = 'sine';
//   oscillator.frequency.value = getFrequency(note);
//   oscillator.connect(audioContext.destination);
//   oscillator.start();
//   oscillator.stop(audioContext.currentTime + 1);
// }

// function getFrequency(note) {
//   const noteToFrequency = {
//     'C': 261.63,
//     'D': 293.66,
//     'E': 329.63,
//     'F': 349.23,
//     'G': 392.00,
//     'A': 440.00,
//     'B': 493.88,
//     'C5': 523.25
//   };
//   return noteToFrequency[note];
// }

// playSaReGaMaPaDhaNiSa();