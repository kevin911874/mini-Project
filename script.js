document.addEventListener('DOMContentLoaded', (event) => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add search functionality (placeholder)
    const searchInput = document.querySelector('.search input');
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            alert('Search functionality would go here in a real application.');
        }
    });
});