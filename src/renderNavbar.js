import { renderMenuSection, renderAboutSection, renderContactSection, clearContainer, renderHome, renderAbout, renderContact } from './renders'

const navButton = (text, ref) => {
  const link = document.createElement('a');
  link.textContent = text;
  link.href = ref;
  link.classList = 'button is-link is-outlined';
  return link;
};

const renderNavbar = (container) => {
  const nav = document.createElement('nav');
  nav.classList = 'navbar is-white';
  const brandDiv = document.createElement('div');
  brandDiv.classList = 'navbar-brand';
  const title = document.createElement('h3');
  title.classList = 'title is-4';
  title.textContent = 'Mamá Angélica';

  container.appendChild(nav);
  brandDiv.appendChild(title);
  nav.appendChild(brandDiv);

  const menuDiv = document.createElement('div');
  menuDiv.classList = 'navbar-menu';
  const itemDiv = document.createElement('div');
  itemDiv.classList = 'navbar-item navbar-end';
  const homeButton = navButton('Home', '#');
  const aboutButton = navButton('About', '#');
  const contactButton = navButton('Contact', '#');

  homeButton.addEventListener('click', renderHome );
  aboutButton.addEventListener('click', renderAbout );
  contactButton.addEventListener('click', renderContact );

  itemDiv.appendChild(homeButton);
  itemDiv.appendChild(aboutButton);
  itemDiv.appendChild(contactButton);

  menuDiv.appendChild(itemDiv);
  nav.appendChild(menuDiv);
};

export default renderNavbar;