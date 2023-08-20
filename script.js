function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        const advice = data.slip.advice;
        adviceContainer.innerHTML = '"' + advice + '"';
        tavsiye.innerHTML = "ADVICE #" + data.slip.id;
      })
      .catch(error => {
        console.error('Error fetching advice:', error);
        adviceContainer.innerHTML = 'An error occurred. Please try again later.';
      });
  }

const buton = document.getElementById('buton');
const adviceContainer = document.getElementById('tavsiyemetni');
const tavsiye = document.getElementById("advice");

buton.addEventListener('click', fetchAdvice);