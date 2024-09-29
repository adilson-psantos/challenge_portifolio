document.getElementById('theme-toggle').addEventListener('click', function() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);

    const themeToggleIcon = document.getElementById('theme-toggle');
    if (newTheme === 'dark') {
        themeToggleIcon.src = '/assets/moon-icon.png';
        themeToggleIcon.alt = 'Alternar para tema claro';
    } else {
        themeToggleIcon.src = '/assets/sun-icon.png';
        themeToggleIcon.alt = 'Alternar para tema escuro';
    }
});


