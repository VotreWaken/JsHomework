// Document Variables
let word = document.getElementById('word');
let output = document.getElementById('output');
let inputField = document.getElementById('inputField');
let attemptsCount = document.getElementById('attemptsCount');

// Variables
let currentIndex = 0;
let incorrectAttempts = 0;

// KeyDown Handler
inputField.addEventListener('keydown', function (event) {
    // Tab Handler
    if (event.key === 'Tab') 
    {
        inputField.focus();
    }
    // Char Handler  
    else if (event.key.length === 1) 
    {
        let currentChar = word.textContent[currentIndex];

        // Correct Char
        if (event.key === currentChar) 
        {
            currentIndex++;
            output.innerHTML += `<span class="highlight">${event.key}</span>`;

            // Hide All Word if guessed right 
            if (currentIndex === word.textContent.length) 
            {
                inputField.style.display = 'none';
            }
        }
        // Wrong Input  
        else 
        {
            incorrectAttempts++;
            attemptsCount.textContent = incorrectAttempts;
        }
    }
    // Reset Default 
    event.preventDefault();
});