import createHome from './modules/home.js';
import createMenu from './modules/menu.js';
import createAbout from './modules/about.js';
import './styles.css';

const contentDiv = document.getElementById('content');

function loadHome() {
  contentDiv.innerHTML = '';
  contentDiv.appendChild(createHome());
}

function loadMenu() {
  contentDiv.innerHTML = '';
  contentDiv.appendChild(createMenu());
}

function loadAbout() {
  contentDiv.innerHTML = '';
  contentDiv.appendChild(createAbout());
}

// Button listeners
document.getElementById('home-btn').addEventListener('click', loadHome);
document.getElementById('menu-btn').addEventListener('click', loadMenu);
document.getElementById('about-btn').addEventListener('click', loadAbout);

// Load home by default
loadHome();
