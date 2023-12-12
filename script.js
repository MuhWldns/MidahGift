document.getElementById('surpriseButton').addEventListener('click', function() {
    var surpriseContent = document.getElementById('surpriseContent');
    surpriseContent.classList.toggle('hidden');
    const video = document.querySelector('.sitiVideo');
    video.play();
  });
  