// Function to show the selected section and update the active link
function showSection(event, sectionId) {
    // Prevent the default link behavior if an event is provided
    if (event) {
        event.preventDefault();
    }

    // Hide all sections first
    const sections = document.querySelectorAll('.menu-section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none'; // Hide each section
    }

    // Show the section that was clicked
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block'; // Show the chosen section
    }

    // Remove active styles from all menu items
    const menuItems = document.querySelectorAll('.menu-item');
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.borderBottom = '2px solid transparent'; // Reset the border
        menuItems[i].style.color = '#5D5D5D'; // Reset the text color
    }

    // Add active styles to the clicked menu item
    const activeItem = document.querySelector('.menu-item[href="#' + sectionId + '"]');
    if (activeItem) {
        activeItem.style.borderBottom = '4px solid #933C24'; // Make the border visible
        activeItem.style.color = '#5D5D5D'; // Change text color to red
    }
}

// Add click event listeners to each menu item
const menuItems = document.querySelectorAll('.menu-item');
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function(event) {
        // Get the section ID from the link's href (without the '#')
        const sectionId = this.getAttribute('href').substring(1);
        showSection(event, sectionId);
    });
}

// Show the "Cake" section by default when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showSection(null, 'cake'); // Show the "Cake" section initially
});
