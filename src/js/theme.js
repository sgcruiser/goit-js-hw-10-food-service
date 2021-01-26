const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const ref = {
  body: document.querySelector('body'),
  switchTheme: document.querySelector('#theme-switch-toggle'),
};

const ligthTheme = Theme.LIGHT;
const darkTheme = Theme.DARK;

ref.switchTheme.addEventListener('change', switchesThemes);
loadsPage();

function loadsPage() {
  const currentTheme = localStorage.getItem('current_Theme');

  if (currentTheme === darkTheme) {
    ref.body.classList.add(darkTheme);
    ref.switchTheme.checked = true;
  } else {
    ref.body.classList.add(ligthTheme);
    localStorage.setItem('current_Theme', ligthTheme);
  }
}

function switchesToDarkTheme() {
  ref.body.classList.replace(ligthTheme, darkTheme);
  localStorage.setItem('current_Theme', darkTheme);

  //   console.log(ref.switchTheme.checked);
  //   console.log(localStorage);
}

function switchesToLigthTheme() {
  ref.body.classList.replace(darkTheme, ligthTheme);
  localStorage.setItem('current_Theme', ligthTheme);
}

function switchesThemes() {
  ref.switchTheme.checked ? switchesToDarkTheme() : switchesToLigthTheme();
}
