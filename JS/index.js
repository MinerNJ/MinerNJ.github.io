//Image Carousel
const picChanger = document.querySelector('.change-about-pics');
let j = 0;

let imagesArray = [];
imagesArray[0]=["./HTML/headshot.jpg", "./HTML/ax.jpg", "./HTML/diploma.jpg", "./HTML/smawblast.jpg"]; 
imagesArray[1]=["./HTML/elephant2.jpg", "./HTML/lift.jpg", "./HTML/TN-OH.jpg", "./HTML/assault.jpg"];
imagesArray[2]=["./HTML/animals.jpg", "./HTML/rock-climb.jpg", "./HTML/OH-gym.jpg", "./HTML/afghan.JPG"];

picChanger.addEventListener('click', function() {
  const images = document.querySelectorAll('.actual-pics');
  if(j > images.length){
    j = 0;
  }
  for(let i = 0; i < images.length; i++) {

        images[i].setAttribute('src', imagesArray[i][j]);
  }
  j++;
});

//Modal Boxes
const openModal = document.querySelector('.left-box');
const openSecondModal = document.querySelector('.right-box');
const closeModal = document.querySelector('.skills-hide-box');
const closeSecondModal = document.querySelector('.skills-hide-box2');


openModal.addEventListener('click', () => {
  toggleShowSkills(document.querySelector('.skills-hide-box'));
});

openSecondModal.addEventListener('click', () => {
  toggleShowSkills(document.querySelector('.skills-hide-box2'));
});

closeModal.addEventListener('click', () => {
  toggleShowSkills(document.querySelector('.skills-hide-box'));
});

closeSecondModal.addEventListener('click', () => {
  toggleShowSkills(document.querySelector('.skills-hide-box2'));
});

function toggleShowSkills(element){
  element.classList.toggle('toggle-skills-content');
}

//NavBar
function toggleHide(element) {
    element.classList.toggle('hide');
}

function bindNavButtonToNavList() {
    const navButton = document.querySelector('.nav__button');
    
    navButton.addEventListener('click', function() {
      const navList = document.querySelector('.icon-list');
      toggleHide(navList);
    });

    // navButton.addEventListener('click', () => {
    //     toggleHide(document.querySelector('.top-nav'));
    //   });
}
  
function run() {
    bindNavButtonToNavList();
}
  
run();
  
  
