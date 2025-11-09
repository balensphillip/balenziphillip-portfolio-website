document.addEventListener('DOMContentLoaded', function() {
    const aboutTab = document.getElementById('about-tab');
    const projectsTab = document.getElementById('projects-tab');
    const aboutSection = document.getElementById('about-section');
    const projectsSection = document.getElementById('projects-section');

    function switchToProjects() {
        aboutSection.classList.add('hidden');
        projectsSection.classList.remove('hidden');
        
        // Update tab styles
        aboutTab.classList.remove('bg-primary', 'text-white');
        aboutTab.classList.add('bg-transparent', 'text-gray-600', 'dark:text-gray-300');
        projectsTab.classList.remove('bg-transparent', 'text-gray-600', 'dark:text-gray-300');
        projectsTab.classList.add('bg-primary', 'text-white');
    }

    function switchToAbout() {
        projectsSection.classList.add('hidden');
        aboutSection.classList.remove('hidden');
        
        // Update tab styles
        projectsTab.classList.remove('bg-primary', 'text-white');
        projectsTab.classList.add('bg-transparent', 'text-gray-600', 'dark:text-gray-300');
        aboutTab.classList.remove('bg-transparent', 'text-gray-600', 'dark:text-gray-300');
        aboutTab.classList.add('bg-primary', 'text-white');
    }

    // Add event listeners to tabs
    projectsTab.addEventListener('click', switchToProjects);
    aboutTab.addEventListener('click', switchToAbout);
});