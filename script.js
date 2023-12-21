// Hello World Button 

document.getElementById('youButton').addEventListener('click', function() {
    document.getElementById('helloWorld').innerHTML = 'Hello You'
});
document.getElementById('meButton').addEventListener('click', function(){
    document.getElementById('helloWorld').innerHTML = 'Hello Me'
});
document.getElementById('bigButton').addEventListener('click', function(){
    document.getElementById('helloWorld').style.transform = "scale(1.5)"
});
document.getElementById('smallButton').addEventListener('click', function(){
    document.getElementById('helloWorld').style.transform = "scale(0.5)"
});


// CV

const correctPassword = 'Password1.';

document.getElementById('CVlink').addEventListener('click', (event) => {
    event.preventDefault(); 
    const password = prompt('Please enter the password:'); 

    if (password === correctPassword) {
        const link = event.target.getAttribute('href'); 
        window.open(link, '_blank'); 
    } else {
        alert('Incorrect password! Access denied.');
    }
});


// Clock

const updateClock = () => {
    const now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear().toString().slice(-2); // Get the last two digits of the year
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    month = (month < 10) ? "0" + month : month;
    day = (day < 10) ? "0" + day : day; 
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('clock').innerHTML = `${day}/${month}/${year}<br>${hours}:${minutes}:${seconds}`;
};
setInterval(updateClock, 1000);
updateClock();


// Star animation

let starCount = 0;
const maxStars = 1000;
const starsArray = []; 

const addStar = () => {
  if (starCount < maxStars) {
    const container = document.body;

    const star = document.createElement('div');
    star.className = 'star';

    star.style.top = `${Math.random() * (window.innerHeight - 5) + window.scrollY}px`;
    star.style.left = `${Math.random() * (0.95 * window.innerWidth - 5)}px`;

    star.style.animationDelay = `${Math.random() * 2}s`;
    star.style.animationDuration = `${Math.random() + 0.5}s`;

    container.appendChild(star);
    
    starsArray.push(star);
    starCount++;
  } else {
    // maxStars
    return;
  }
};

const removeStar = () => {
  if (starsArray.length > 0) {
    const oldestStar = starsArray.shift(); // Remove oldest star from the beginning of the array
    document.body.removeChild(oldestStar);
    starCount--;
  }
};

// Initialize with 5 stars
for (let i = 0; i < 3; i++) {
  addStar();
}

// Remove a star every 1 second with a 8-second delay
setTimeout(() => {
  const removeStarIntervalId = setInterval(removeStar, 500);
}, 10000);

// Generate stars when scrolling
document.addEventListener('scroll', () => {
  addStar()
});
