window.onload = function () {
    // Stores the elements to be checkes
    const elements = document.querySelectorAll('.about-text, .about-image');

    // Checks if the elements can be seen on screen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the element can be seen show it
                entry.target.classList.add('show');
            }
        });
    }, {
        // If a certain amount of the element is seen show it
        threshold: 0.2 // 20% of the element is visible
    });
    // Calls for the elements to be checked
    elements.forEach(el => observer.observe(el));
}