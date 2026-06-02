// 1. Import the file as a module variable at the very top
import griotImg from '../images/griot.jpg';

function createHome() {
  const container = document.createElement('div');

  const heading = document.createElement('h1');
  heading.textContent = 'Griot Lakay';
  container.appendChild(heading);

  const tagline = document.createElement('p');
  tagline.textContent = 'Authentic Haitian Cuisine — Welcome Home';
  container.appendChild(tagline);

  const welcomeMessage = document.createElement('p');
  welcomeMessage.textContent = 'Nan lakay nou, manje se lanmou.';
  container.appendChild(welcomeMessage);

  const chefImage = document.createElement('img');
  // 2. Assign the imported image bundle path here
  chefImage.src = griotImg;
  chefImage.alt = 'Authentic Haitian Griot dish';
  chefImage.className = 'home-hero-image';

  container.appendChild(chefImage);

  return container;
}

export default createHome;
