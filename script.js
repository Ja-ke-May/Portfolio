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
    const password = prompt('Please enter the password:'); // Prompts the user to enter the password

    if (password === correctPassword) {
        const link = event.target.getAttribute('href'); // Fetches the link from the element
        window.open(link, '_blank'); // Opens the link in a new tab
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

// TimelineLine animation

document.addEventListener("DOMContentLoaded", function() {
    const lines = document.querySelectorAll('.timelineLine');
    
    lines.forEach((line) => {
      const translateXValue = `${Math.random() * 100}vw`; // Random X position between 0 and 100vw
      line.style.setProperty('--translateX-value', translateXValue);
      
      const parent = line.parentElement;
      parent.removeChild(line);
      parent.appendChild(line);
    });
  });
  