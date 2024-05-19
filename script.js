document.addEventListener('DOMContentLoaded', () => {
  let draggedElement = null;

  document.querySelectorAll('.image').forEach(image => {
    image.addEventListener('dragstart', (e) => {
      draggedElement = e.target;
      setTimeout(() => {
        e.target.style.visibility = 'hidden';
      }, 0);
    });

    image.addEventListener('dragend', (e) => {
      setTimeout(() => {
        e.target.style.visibility = 'visible';
        draggedElement = null;
      }, 0);
    });

    image.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    image.addEventListener('dragenter', (e) => {
      e.preventDefault();
      if (e.target.classList.contains('image')) {
        e.target.style.border = '2px dashed #000';
      }
    });

    image.addEventListener('dragleave', (e) => {
      if (e.target.classList.contains('image')) {
        e.target.style.border = '2px solid #ccc';
      }
    });

    image.addEventListener('drop', (e) => {
      if (e.target.classList.contains('image')) {
        e.target.style.border = '2px solid #ccc';

        let tempBackground = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = e.target.style.backgroundImage;
        e.target.style.backgroundImage = tempBackground;

        let tempText = draggedElement.textContent;
        draggedElement.textContent = e.target.textContent;
        e.target.textContent = tempText;
      }
    });
  });
});