function createMenu() {
  const container = document.createElement('div');
  container.className = 'menu-grid';

  // Griot (Fried Pork)
  const item1 = document.createElement('div');
  item1.className = 'menu-item';

  const header1 = document.createElement('div');
  header1.className = 'menu-item-header';

  const name1 = document.createElement('h3');
  name1.textContent = 'Griot (Fried Pork)';
  header1.appendChild(name1);

  const price1 = document.createElement('p');
  price1.className = 'menu-item-price';
  price1.textContent = '$15';
  header1.appendChild(price1);

  item1.appendChild(header1);

  const desc1 = document.createElement('p');
  desc1.textContent =
    'Marinated 24 hours, twice-fried to perfection. Served with pikliz';
  item1.appendChild(desc1);

  container.appendChild(item1);

  // Soup Joumou (Pumpkin Soup)
  const item2 = document.createElement('div');
  item2.className = 'menu-item';

  const header2 = document.createElement('div');
  header2.className = 'menu-item-header';

  const name2 = document.createElement('h3');
  name2.textContent = 'Soup Joumou (Pumpkin Soup)';
  header2.appendChild(name2);

  const price2 = document.createElement('p');
  price2.className = 'menu-item-price';
  price2.textContent = '$17';
  header2.appendChild(price2);

  item2.appendChild(header2);

  const desc2 = document.createElement('p');
  desc2.textContent =
    'A savory, hearty stew made with pureed Caribbean pumpkin or squash, beef, potatoes, cabbage, and pasta.';
  item2.appendChild(desc2);

  container.appendChild(item2);

  // Diri ak Djon Djon (Black Mushroom Rice)
  const item3 = document.createElement('div');
  item3.className = 'menu-item';

  const header3 = document.createElement('div');
  header3.className = 'menu-item-header';

  const name3 = document.createElement('h3');
  name3.textContent = 'Diri ak Djon Djon (Black Mushroom Rice)';
  header3.appendChild(name3);

  const price3 = document.createElement('p');
  price3.className = 'menu-item-price';
  price3.textContent = '$18';
  header3.appendChild(price3);

  item3.appendChild(header3);

  const desc3 = document.createElement('p');
  desc3.textContent =
    'A fragrant, earthy rice dish colored and flavored by a rare, wild black mushroom native to Haiti.';
  item3.appendChild(desc3);

  container.appendChild(item3);

  return container;
}

export default createMenu;
