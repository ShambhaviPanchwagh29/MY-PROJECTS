// This function takes a number as an argument and returns it as a string,

padZero = (number) => {            // prefixed with a '0' if the number is less than 10.
    return number < 10 ? `0${number}` : number;
  }

  // This function gets the current date and time and displays it in the
// following format: "YYYY/MM/DD HH : MM : SS AM/PM".
  let date = () => {
    const now = new Date();
    const hours = padZero(now.getHours() % 12 || 12);    // Get the hours, minutes, and seconds, and pad them with a '0' if they
    // are less than 10.
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';       // Determine whether it's AM or PM.
    document.querySelector(".date").innerHTML = `${now.getFullYear()}/${padZero(now.getMonth() + 1)}/${padZero(now.getDate())}`     // Display the date and time in the appropriate HTML elements.
    document.querySelector(".clock").innerHTML = `${hours} : ${minutes} : ${seconds} ${ampm}`
  }
  setInterval(date, 1000)    // Call the date function every second to update the time display.
  date()                   // Call the date function once to display the initial time.


