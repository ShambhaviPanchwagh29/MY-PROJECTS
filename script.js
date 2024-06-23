let string = "";
let buttons = document.querySelectorAll('.button');          // Query all elements with the class 'button' and convert the NodeList to an array
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=> {        // Add an event listener for each button that listens for a click event
    if (e.target.innerHTML == '=') {          // If true, evaluate the string and update the input value
      string = eval(string); 
      document.querySelector('input').value = string; 
    }
    else if (e.target.innerHTML == 'C') {         // Check if the innerHTML of the clicked button is equal to 'C'
      string = "";                             // If true, reset the string and input value to an empty string
      document.querySelector('input').value = string;
    }
    else {                                            // If the innerHTML of the clicked button is not '=' or 'C'
      console.log(e.target)
      string = string + e.target.innerHTML;           // Concatenate the innerHTML of the clicked button to the string
      document.querySelector('input').value = string;    // Update the input value with the new string
    }
  })
})



