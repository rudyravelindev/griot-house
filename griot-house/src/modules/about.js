function createAbout() {
  const container = document.createElement('div');
  container.className = 'about-section';

  const heading = document.createElement('h1');
  heading.textContent = 'Chez Rudy & Marie';
  container.appendChild(heading);

  const history = document.createElement('p');
  history.className = 'about-history';
  history.textContent =
    'The story of Chez Rudy & Marie began in the coastal town of Jacmel, Haiti, where Marie first learned the art of Haitian cuisine from her mother, preparing large pots of food for the local market. After relocating to the United States, she and Rudy initially shared their heritage through small-scale catering and an underground kitchen, similar to many resilient Haitian immigrants who built their dreams through community support. Driven by a mission to "brew hope" and spread the joy of their culture, they officially opened their brick-and-mortar location to provide a destination where anyone could indulge in the captivating flavors of their homeland.';
  container.appendChild(history);

  // Create the stylized info box for contact and hours details
  const infoBox = document.createElement('div');
  infoBox.className = 'about-info-box';

  const infoHeading = document.createElement('h2');
  infoHeading.textContent = 'Location & Hours';
  infoBox.appendChild(infoHeading);

  const address = document.createElement('p');
  address.textContent = 'Address: 1234 Caribbean Way, Kirkland, WA 98033.';
  infoBox.appendChild(address);

  const sunday = document.createElement('p');
  sunday.textContent = 'Sunday: Closed';
  infoBox.appendChild(sunday);

  const monSat = document.createElement('p');
  monSat.textContent = 'Monday – Friday: 11:00 AM – 9:00 PM';
  infoBox.appendChild(monSat);

  const saturday = document.createElement('p');
  saturday.textContent = 'Saturday: 12:00 PM – 10:00 PM';
  infoBox.appendChild(saturday);

  // Append the filled info box to the main section container
  container.appendChild(infoBox);

  return container;
}

export default createAbout;
