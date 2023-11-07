document.getElementById('youButton').addEventListener('click', function() {
    document.getElementById('helloWorld').innerHTML = 'Hello You'
});
document.getElementById('meButton').addEventListener('click', function(){
    document.getElementById('helloWorld').innerHTML = 'Hello Me'
});
document.getElementById('bigButton').addEventListener('click', function(){
    document.getElementById('helloWorld').style.scale = "1.5"
});
document.getElementById('smallButton').addEventListener('click', function(){
    document.getElementById('helloWorld').style.scale = "0.5"
});

require('dotenv').config();

const correctPassword = .env.PASSWORD;

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
