const screens = document.querySelectorAll('.screen');  // Select all elements with the class 'screen'
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');  // Select all elements with the class 'choose-insect-btn'
const start_btn = document.getElementById('start-btn')  // Select the element with the id 'start-btn'
const game_container = document.getElementById('game-container')  // Select the element with the id 'game-container'
const timeEl = document.getElementById('time')  // Select the element with the id 'time'
const scoreEl = document.getElementById('score')  // Select the element with the id 'score'
const message = document.getElementById('message')  // Select the element with the id 'message'
let seconds = 0   // Initialize seconds and score variables
let score = 0
let selected_insect = {}  // Initialize the selected_insect object

start_btn.addEventListener('click', () => screens[0].classList.add('up'))  // Add event listener to the start button

choose_insect_btns.forEach(btn => {       // Iterate through each 'choose-insect-btn' and add event listener
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')  // Get the image source and alt text from the clicked button
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = { src, alt } // Set the selected_insect object
        screens[1].classList.add('up')  // Add the 'up' class to the second screen
        setTimeout(createInsect, 1000)   // Call the createInsect function after 1 second
        startGame()   // Call the startGame function
    })
})

function startGame() {               // Function to start the game
    setInterval(increaseTime, 1000)  // Call the increaseTime function every 1 second
}

function increaseTime() {             // Function to increase the time
    let m = Math.floor(seconds / 60)   // Calculate minutes and seconds
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`  // Set the time innerHTML
    seconds++                              // Increment seconds
}

function createInsect() {                         // Function to create an insect
    const insect = document.createElement('div')   // Create a new div element with the class 'insect'
    insect.classList.add('insect')
    const { x, y } = getRandomLocation()           // Get random x and y coordinates
    insect.style.top = `${y}px`                    // Set the insect's top and left CSS properties
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`    // Set the insect's HTML content with the selected insect's image
    insect.addEventListener('click', catchInsect)      // Add event listener to the insect
    game_container.appendChild(insect)              // Append the insect to the game container
}

function getRandomLocation() {                // Function to get random x and y coordinates
    const width = window.innerWidth             // Get the window's width and height
    const height = window.innerHeight            // Get random x and y coordinates within the window's bounds
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }                              // Return the random coordinates
}

function catchInsect() {                         // Function to catch an insect
    increaseScore()                              // Call the increaseScore function
    this.classList.add('caught')               // Add the 'caught' class to the clicked insect
    setTimeout(() => this.remove(), 2000)       // Remove the insect after 2 seconds
    addInsects()                               // Call the addInsects function
}

function addInsects() {                       // Function to add more insects
    setTimeout(createInsect, 1000)              // Call the createInsect function after 1 and 1.5 seconds
    setTimeout(createInsect, 1500)
}

function increaseScore() {               // Function to increase the score
    score++                               // Increment the score
    if(score > 19) {                          // If the score is greater than 19, show the message
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`                  // Set the score innerHTML
}

function increaseScore() {                                  // Function to increase the score
    score++;                                                 // Increment the score
    if(score >= 20) {                                        // If the score is greater than or equal to 20, end the game
        game_container.classList.add('game-over');           // Add the 'game-over' class to the game container
        choose_insect_btns.forEach(btn => {                   // Disable the 'choose-insect-btn' buttons
            btn.disabled = true;
        });
    }
    scoreEl.innerHTML = `Score: ${score}`;                      // Set the score innerHTML
}