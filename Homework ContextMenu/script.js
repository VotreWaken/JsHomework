// Variables
const customContextMenu = document.getElementById('customContextMenu');
const colorItems = document.querySelectorAll('.colorItem');

// Context Menu Handler
document.addEventListener('contextmenu', (event) => 
{
    event.preventDefault();
    customContextMenu.style.left = `${event.clientX}px`;
    customContextMenu.style.top = `${event.clientY}px`;
    customContextMenu.style.display = 'block';
});

// Hide On Click Event
document.addEventListener('click', () => {
    customContextMenu.style.display = 'none';
});

// Click On Menu Item
colorItems.forEach(item => {
    item.addEventListener('click', (event) => {
        const color = window.getComputedStyle(event.currentTarget.querySelector('.colorSquare')).backgroundColor;
        document.body.style.backgroundColor = color;
        customContextMenu.style.display = 'none';
    });
});