document.addEventListener('DOMContentLoaded', function() {

    // Get DOM elements
    const aboutTab = document.getElementById('about-tab');
    const projectsTab = document.getElementById('projects-tab');
    const aboutSection = document.getElementById('about-section');
    const projectsSection = document.getElementById('projects-section');
    
    console.log('Elements found:', {
        aboutTab: aboutTab ? 'Found' : 'Not found',
        projectsTab: projectsTab ? 'Found' : 'Not found', 
        aboutSection: aboutSection ? 'Found' : 'Not found',
        projectsSection: projectsSection ? 'Found' : 'Not found'
    });
    
    // Check if all elements exist
    if (!aboutTab || !projectsTab || !aboutSection || !projectsSection) {
        console.error('Error: One or more required elements not found');
        return;
    }
    
    // Function to switch to Projects section
    function switchToProjects() {
        console.log('Switching to Projects section');
        
        // Hide about section, show projects section
        aboutSection.classList.remove('section-visible');
        aboutSection.classList.add('section-hidden');
        projectsSection.classList.remove('section-hidden');
        projectsSection.classList.add('section-visible');
        
        // Update tab styles
        aboutTab.classList.remove('bg-primary', 'text-white');
        aboutTab.classList.add('text-gray-600', 'dark:text-gray-300');
        projectsTab.classList.remove('text-gray-600', 'dark:text-gray-300');
        projectsTab.classList.add('bg-primary', 'text-white');
        
        console.log('Projects section should now be visible');
    }
    
    // Function to switch to About section
    function switchToAbout() {
        console.log('Switching to About section');
        
        // Hide projects section, show about section
        projectsSection.classList.remove('section-visible');
        projectsSection.classList.add('section-hidden');
        aboutSection.classList.remove('section-hidden');
        aboutSection.classList.add('section-visible');
        
        // Update tab styles
        projectsTab.classList.remove('bg-primary', 'text-white');
        projectsTab.classList.add('text-gray-600', 'dark:text-gray-300');
        aboutTab.classList.remove('text-gray-600', 'dark:text-gray-300');
        aboutTab.classList.add('bg-primary', 'text-white');
    }
    
    // Event listeners for tabs
    projectsTab.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Projects tab clicked - event listener working');
        switchToProjects();
    });
    
    aboutTab.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('About tab clicked - event listener working');
        switchToAbout();
    });
    
    console.log('Event listeners attached successfully');
    
    // Test: Try switching to projects programmatically after 2 seconds
    setTimeout(() => {
        console.log('Testing: Programmatically switching to projects section');
        // switchToProjects(); // Uncomment this line to test if needed
    }, 2000);
});