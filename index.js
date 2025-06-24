// Write your code here!
// Remove the <main id="main"> element
const main = document.getElementById('main');
if (main) {
  main.remove();
}


const newHeader = document.createElement('h1');


newHeader.id = 'victory';


newHeader.textContent = 'Your Name is the champion'; 