



// Text to be typed out
const text = "Our journey together has been filled with laughter, tears, and countless memories that we'll cherish forever. Join us as we celebrate our love and embark on the next chapter of our story...";


// Get the h2 element where the text will be typed
const loveStoryElement = document.querySelector('.love-content h2');

// Initialize index to 0
let index = 0;

// Typing function
function type() {
    // Get the current text
    const currentText = text.slice(0, index);

    // Set the text of the h2 element
    loveStoryElement.textContent = currentText;

    // Increment index
    index++;

    // Check if reached end of text
    if (index > text.length) {
        clearInterval(timer); // Stop the typing
        document.querySelector('.love-content h3').style.display = 'block';
        document.querySelector('.love-button').style.display = 'block';
    }else{
        document.querySelector('.love-content h3').style.display = 'none';
        document.querySelector('.love-button').style.display = 'none';
    }
}

// Set typing interval (adjust speed by changing milliseconds)
const timer = setInterval(type, 100); // Typing speed: 50 milliseconds


document.querySelector('.luv-button').addEventListener('click', (e) =>{
    console.log(e);
    if(e.isTrusted === true){
        document.querySelector('.before-container').classList.add('close');
        document.querySelector('.container').classList.add('open');
    }
     
    console.log(e);
});

document.querySelector('.love-button button:first-child').addEventListener('click', () => {
    let message = "Hello%20there,%20I%20am%20interested%20in%20your%20services";
    let whatsappLink = "https://wa.me/+2348050255377?text=" + message; // Corrected URL format
    window.open(whatsappLink, '_blank');
});

document.querySelector('.love-button button:last-child').addEventListener('click', () => {
    let message = "Hello%20there,%20I%20am%20interested%20in%20your%20services";
    let whatsappLink = "https://wa.me/?text=" + message;
    window.open(whatsappLink, '_blank');
});
