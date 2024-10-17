// Function to filter the schedule based on selected category
function filterCategory() {
    const category = document.getElementById('category').value;
    const rows = document.querySelectorAll('#scheduleTable tbody tr');

    rows.forEach(row => {
        const rowCategory = row.getAttribute('data-category');
        if (category === 'all' || rowCategory === category) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Contact form submission (existing feature)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
