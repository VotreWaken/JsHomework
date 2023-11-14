// Generate Random Color 
function getRandomColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    return randomColor;
}

// Set Background to Page
function applyBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Callback To Click Event Handler
applyBackgroundColor();

// Click Event Handler 
document.body.addEventListener('click', applyBackgroundColor);