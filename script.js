const draggables = document.querySelectorAll('.draggable');
let draggedElement = null;

draggables.forEach(draggable => {
    // Start dragging
    draggable.addEventListener('dragstart', (e) => {
        draggedElement = e.target; // Store the dragged element
        setTimeout(() => {
            draggedElement.style.visibility = 'hidden'; // Make it invisible during drag
        }, 0);
    });

    // End dragging
    draggable.addEventListener('dragend', () => {
        setTimeout(() => {
            if (draggedElement) {
                draggedElement.style.visibility = 'visible'; // Restore visibility after drop
                draggedElement = null; // Clear dragged element
            }
        }, 0);
    });

    // Allow drop
    draggable.addEventListener('dragover', (e) => {
        e.preventDefault(); // Prevent default to allow drop
    });

    // Handle drop
    draggable.addEventListener('drop', (e) => {
        e.preventDefault(); // Prevent default behavior
        if (draggedElement && draggedElement !== e.target) {
            // Swap background images only if the target is not the dragged element
            const draggedStyle = window.getComputedStyle(draggedElement).backgroundImage;
            const targetStyle = window.getComputedStyle(e.target).backgroundImage;

            // Swap backgrounds
            draggedElement.style.backgroundImage = targetStyle;
            e.target.style.backgroundImage = draggedStyle;
        }
    });
});
