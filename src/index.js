import './bulma.min.css';
import './style.css';
import dish1 from './joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg';
import dish2 from './victoria-shes-4acsnIWXm3k-unsplash.jpg';
import dish3 from './victoria-shes-COYAmXroY1A-unsplash.jpg';


function renderNavbar(container) {
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
  itemDiv.appendChild(navButton('Home', '#'));
  itemDiv.appendChild(navButton('About', '#'));
  itemDiv.appendChild(navButton('Contact', '#'));

  menuDiv.appendChild(itemDiv);
  nav.appendChild(menuDiv);
}

function renderFooter(container) {
  const footer = document.createElement('footer');
  footer.classList = 'footer';
  const contentDiv = document.createElement('div');
  contentDiv.classList = 'content has-text-centered';
  const textP = document.createElement('p');
  textP.innerHTML = '<strong>RestaurantPage</strong> by <a href="https://github.com/FrancoRosa">Franco Rosa</a>. 2020</a>. Images from <a href="https://unsplash.com/">Unplash</a>. Main style <strong>Bulmaswatch</strong> by <a href="https://jgog.in/">Jenil Gogari</a>.' 
  contentDiv.appendChild(textP);
  footer.appendChild(contentDiv);
  container.appendChild(footer);
}

function navButton(text, ref) {
  const link = document.createElement('a');
  link.textContent = text;
  link.href = ref;
  link.classList = "button is-link is-outlined";
  return link;
}



function columnContainer(imageClass, text) {
  const columnDiv = document.createElement('div');
  columnDiv.classList = 'column is-one-quarter';
  const card = document.createElement('div');
  card.classList = 'card';
  const cardImg = document.createElement('div');
  cardImg.classList = 'card-image';
  const figure = document.createElement('figure');
  figure.classList = 'image is-4by5 '.concat(imageClass);
  cardImg.appendChild(figure);
  card.appendChild(cardImg);

  const cardCont = document.createElement('div');
  cardCont.classList = 'card-content';
  const divCont = document.createElement('div');
  divCont.innerHTML = text;
  cardCont.appendChild(divCont); 
  card.appendChild(cardCont);

  columnDiv.appendChild(card);
  return columnDiv;
}

function renderMenuSection(container) {
  const text1 = 'Lorem ipsum dolor sit amet, real <a>@bulmaio</a>.';
  const text2 = 'Lorem ipsum dolor sit amet, real <a>@bulmaio</a>.';
  const text3 = 'Lorem ipsum dolor sit amet, real <a>@bulmaio</a>.';
  
  const title = document.createElement('h1');
  title.classList = 'title has-text-centered';
  title.textContent = 'This is our menu';
  
  const columnsDiv = document.createElement('div');
  columnsDiv.classList = 'columns is-centered';
  
  columnsDiv.appendChild(columnContainer('dish1', text1));
  columnsDiv.appendChild(columnContainer('dish2', text2));
  columnsDiv.appendChild(columnContainer('dish3', text3));

  const section = document.createElement('section');
  section.appendChild(title);
  section.appendChild(columnsDiv);
  
  container.appendChild(section);
}

window.onload = () => {
  const contentDiv = document.querySelector('#content');
  renderNavbar(contentDiv);
  renderMenuSection(contentDiv);
  renderFooter(contentDiv);
}
