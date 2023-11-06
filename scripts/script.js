
console.log("hi");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  var scrollGroup = document.getElementById('scrollgroup');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollGroup.style.display = 'block';
  } else {
    scrollGroup.style.display = 'none';
  }
}

document.getElementById('scrollgroup').addEventListener('click', function () {
  scrollToTop();
});

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const videos = document.querySelectorAll('.ad-container2 video');

videos.forEach(video => {
  video.addEventListener('mouseover', () => {
    video.play();
  });

  video.addEventListener('mouseout', () => {
    video.pause();
    video.currentTime = 0;
  });
});


const darkModeButton = document.getElementById("dark-mode-button");
const body = document.body;

darkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});


const likeButtons = document.querySelectorAll('.like');
const afterButtons = document.querySelectorAll('.after');

likeButtons.forEach((likeButton, index) => {
  likeButton.addEventListener('click', () => {
    likeButton.style.display = 'none';
    afterButtons[index].style.display = 'block';
  });

  afterButtons[index].addEventListener('click', () => {
    afterButtons[index].style.display = 'none';
    likeButton.style.display = 'block';
  });
});






