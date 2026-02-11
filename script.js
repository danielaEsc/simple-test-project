let count = 0;

const counterDisplay = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

function updateDisplay() {
    counterDisplay.textContent = count;
    if (count > 0) {
        counterDisplay.style.color = '#2ecc71';
    } else if (count < 0) {
        counterDisplay.style.color = '#e74c3c';
    } else {
        counterDisplay.style.color = '#2c3e50';
    }
}

decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});
