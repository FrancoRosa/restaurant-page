const navButton = (text) => {
  const link = document.createElement('a');
  link.textContent = text;
  link.classList = 'button is-link is-outlined';
  return link;
};

const burgerButton = () => {
  const aria = document.createElement('span');
  aria.setAttribute('aria-hidden', 'true');

  const burger = document.createElement('a');
  burger.setAttribute('role', 'button');
  burger.setAttribute('data-target', 'navItems');
  burger.classList = 'navbar-burger burger';

  burger.appendChild(aria);
  burger.appendChild(aria.cloneNode(true));
  burger.appendChild(aria.cloneNode(true));

  burger.addEventListener('click', () => {
    const target = document.getElementById('navItems');
    burger.classList.toggle('is-active');
    target.classList.toggle('is-active');
  });

  return burger;
};

const renderNavbar = (container) => {
  const nav = document.createElement('nav');
  nav.classList = 'navbar is-white';
  const brandDiv = document.createElement('div');
  brandDiv.classList = 'navbar-brand';
  const title = document.createElement('h3');
  title.classList = 'title is-4';
  title.textContent = 'Mamá Angélica';
  brandDiv.appendChild(title);
  brandDiv.appendChild(burgerButton());
  nav.appendChild(brandDiv);
  container.appendChild(nav);

  const menuDiv = document.createElement('div');
  menuDiv.classList = 'navbar-menu';
  menuDiv.id = 'navItems';
  const itemDiv = document.createElement('div');
  itemDiv.classList = 'navbar-end';
  const homeButton = navButton('Home');
  const aboutButton = navButton('About');
  const contactButton = navButton('Contact');

  itemDiv.appendChild(homeButton);
  itemDiv.appendChild(aboutButton);
  itemDiv.appendChild(contactButton);

  menuDiv.appendChild(itemDiv);
  nav.appendChild(menuDiv);
};

export default renderNavbar;