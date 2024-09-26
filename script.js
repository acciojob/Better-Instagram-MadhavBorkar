const draggables = document.querySelectorAll('.draggable');
let draggedElement = null;

draggables.forEach(draggable => {
    // Start dragging
    draggable.addEventListener('dragstart', (e) => {
        draggedElement = e.target;
        setTimeout(() => {
            draggedElement.style.visibility = 'hidden'; // Make it invisible during drag
        }, 0);
    });

    // End dragging
    draggable.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedElement.style.visibility = 'visible'; // Restore visibility after drop
            draggedElement = null;
        }, 0);
    });

    // Allow drop
    draggable.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    // Handle drop
    draggable.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedElement !== e.target) {
            // Swap background images
            let draggedStyle = window.getComputedStyle(draggedElement).backgroundImage;
            let targetStyle = window.getComputedStyle(e.target).backgroundImage;
            draggedElement.style.backgroundImage = targetStyle;
            e.target.style.backgroundImage = draggedStyle;
        }
    });
});