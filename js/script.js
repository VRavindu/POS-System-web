
document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.getElementById('home-section');
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section');

    // Function to show the home section and hide other sections
    function showHomeSection() {
        homeSection.style.display = 'block';
        sections.forEach(section => {
            section.style.display = 'none';
        });
        navbar.style.display = 'none'; // Hide the navbar
    }

    // Function to show a specific section and hide the home section
    function showSection(sectionId) {
        homeSection.style.display = 'none';
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
        navbar.style.display = 'block'; // Show the navbar
    }

    // Add event listeners to navbar links
    document.querySelectorAll('.nav-bar a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = this.getAttribute('href').substring(1);
            if (targetSection === 'home-section') {
                showHomeSection();
            } else {
                showSection(targetSection);
            }
            // Update the URL hash
            window.location.hash = targetSection;
        });
    });

    // Add event listeners to buttons within the cards section
    document.querySelectorAll('.sec-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = this.parentElement.getAttribute('href').substring(1);
            showSection(targetSection);
            // Update the URL hash
            window.location.hash = targetSection;
        });
    });

    // Check the current URL hash and show the appropriate section
    const currentHash = window.location.hash.substring(1);
    if (!currentHash || currentHash === 'home-section') {
        showHomeSection();
    } else {
        showSection(currentHash);
    }
});

