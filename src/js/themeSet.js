const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
body.classList.add(Theme.LIGHT);

const switchToggle = document.querySelector('.theme-switch__toggle');
switchToggle.addEventListener('change', changeTheme);


export function changeTheme(event) {
    if (event.target.checked) {
        body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    } else if (!event.target.checked) {
        body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
};

export function saveTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);

    }
    if (body.classList.contains(Theme.DARK)) {
        switchToggle.checked=true;
    }
}
