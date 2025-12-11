// =======================================================
// DAYON: UI TOGGLE LOGIC (Minimal Implementation)
// Ensures Filter Modal and Dorm Detail Modal open/close correctly.
// =======================================================

// --- 1. FILTER MODAL ELEMENTS ---
// Variables must be defined before the functions that use them.
const filterButton = document.querySelector('.btn-filter');
const filterModal = document.getElementById('filter-modal');
// We use a safe check in case the element is not found
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


// --- 2. DORM DETAIL MODAL ELEMENTS ---

const dormCards = document.querySelectorAll('.dorm-card');
const dormDetailModal = document.getElementById('dorm-detail-modal'); 
const dormDetailCloseBtn = dormDetailModal ? dormDetailModal.querySelector('.back-icon') : null;

/**
 * Handler to open the Dorm Detail Modal when any dorm card is clicked.
 */
function openDormDetailModal(event) {
    // 🛑 IMPORTANT: Prevent opening the modal if the user clicked the heart icon
    if (event.target.closest('.heart')) {
        return; 
    }

    if (dormDetailModal) {
        // Log the ID of the clicked card for the team's reference
        const clickedDormId = event.currentTarget.id;
        console.log("Dorm Card Clicked, ID:", clickedDormId);

        // Make the modal visible
        dormDetailModal.style.display = 'flex';
    }
}

// Function to close the Dorm Detail Modal
function closeDormDetailModal() {
    if (dormDetailModal) {
        dormDetailModal.style.display = 'none';
    }
}


// =======================================================
// 3. ATTACH EVENT LISTENERS
// =======================================================

// A. Filter Modal Listeners
if (filterButton && filterModal) {
    filterButton.addEventListener('click', openFilterModal);
}
if (filterCloseButton) {
    filterCloseButton.addEventListener('click', closeFilterModal);
}


// B. Dorm Detail Modal Listeners
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