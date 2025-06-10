document.addEventListener('DOMContentLoaded', () => {
  const tiltContainer = document.querySelectorAll('.tilt-container');
  tiltContainer.forEach(container => {
    container.addEventListener('click', (e) => {
      const hoverInfo = container.querySelector('.hover-info');
      if(hoverInfo){
        console.log("clicked inner");
        hoverInfo.classList.toggle('tilt-active');
      }
    });
  });
});