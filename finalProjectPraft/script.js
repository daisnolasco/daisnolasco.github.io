let currentPage = 0;
const spreads = document.querySelectorAll('.page, .spread');
const totalSpreads = spreads.length;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update page flipping
function updatePages() {
    spreads.forEach((spread, index) => {
        if (index === currentPage) {
            spread.style.transform = 'rotateY(0deg)';
            spread.style.zIndex = totalSpreads - index;
        } else if (index < currentPage) {
            spread.style.transform = 'rotateY(-180deg)';
            spread.style.zIndex = index;
        } else {
            spread.style.transform = 'rotateY(180deg)';
            spread.style.zIndex = totalSpreads - index;
        }
    });

    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === totalSpreads - 1;
}

// Event listeners for navigation
prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updatePages();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < totalSpreads - 1) {
        currentPage++;
        updatePages();
    }
});

// Initialize the magazine
updatePages();
