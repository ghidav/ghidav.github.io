// On page load
document.addEventListener('DOMContentLoaded', function() {
    let savedTheme = localStorage.getItem('theme');
    
    // If user previously chose a theme, apply it, else default to 'light'
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

document.getElementById('themeToggle').addEventListener('click', function() {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});
