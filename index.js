



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
    document.querySelector('.container').classList.add('open');
    document.querySelector('.before-container').classList.add('slide-out-top');
    setTimeout(() => {
        document.querySelector('.before-container').style.display = 'none';
    }, 0)
    console.log(e);
});

document.querySelector('.love-button button:first-child').addEventListener('click', () => {
    let message = "I%20will%20my%20baby%F0%9F%A5%B9%F0%9F%A4%8D%20I%20love%20you%20so%20much%F0%9F%A4%8D%20thanks%20for%20always%20been%20there%20for%20me.%0A%0AHappy%20Valentino%20babe%F0%9F%A4%AD%F0%9F%AB%B6%F0%9F%8F%BD";
    let whatsappLink = "https://wa.me/+2348050255377?text=" + message; // Corrected URL format
    window.open(whatsappLink, '_blank');
});

document.querySelector('.love-button button:last-child').addEventListener('click', () => {
    let message = "I%20am%20so%20sorry%20I%20can't%20be%20your%20val%F0%9F%92%94%F0%9F%98%B9%F0%9F%98%B9%F0%9F%98%B9";
    let whatsappLink = "https://wa.me/?text=" + message;
    window.open(whatsappLink, '_blank');
});
