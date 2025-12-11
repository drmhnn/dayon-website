// Ensures Filter Modal and Dorm Detail Modal open/close correctly.
const filterButton = document.querySelector('.btn-filter');
const filterModal = document.getElementById('filter-modal');
const filterCloseButton = filterModal ? filterModal.querySelector('.cancel-icon') : null;

// Function to open the Filter Modal
function openFilterModal() {
    if (filterModal) {
        filterModal.style.display = 'flex';
    }
}

// Function to close the Filter Modal
function closeFilterModal() {
    if (filterModal) {
        filterModal.style.display = 'none';
    }
}
const dormCards = document.querySelectorAll('.dorm-card');
const dormDetailModal = document.getElementById('dorm-detail-modal'); 
const dormDetailCloseBtn = dormDetailModal ? dormDetailModal.querySelector('.back-icon') : null;
// Handler to open the Dorm Detail Modal when any dorm card is clicked.
function openDormDetailModal(event) {
    // 🛑 IMPORTANT: Prevent opening the modal if the user clicked the heart icon
    if (event.target.closest('.heart')) {
        return; 
    }

    if (dormDetailModal) {
        const clickedDormId = event.currentTarget.id;
        console.log("Dorm Card Clicked, ID:", clickedDormId);

        dormDetailModal.style.display = 'flex';
    }
}

// Function to close the Dorm Detail Modal
function closeDormDetailModal() {
    if (dormDetailModal) {
        dormDetailModal.style.display = 'none';
    }
}

if (filterButton && filterModal) {
    filterButton.addEventListener('click', openFilterModal);
}
if (filterCloseButton) {
    filterCloseButton.addEventListener('click', closeFilterModal);
}

if (dormCards.length > 0) {
    dormCards.forEach(card => {
        // Attach click listener to EVERY dorm card
        card.addEventListener('click', openDormDetailModal);
    });
}

if (dormDetailCloseBtn) {
    // Attach click listener to the close button (back-icon)
    dormDetailCloseBtn.addEventListener('click', closeDormDetailModal);
}

// NOTE: Your team will add the Data Array (ArrayList) and the populateModal function here later.