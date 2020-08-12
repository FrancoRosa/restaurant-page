import './bulma.min.css';
import './style.css';
import renderFooter from './renderFooter';
import renderNavbar from './renderNavbar';
import { renderMenuSection } from './renders';

const renderPage = () => {
  const contentDiv = document.querySelector('#content');
  const section = document.createElement('section');

  renderNavbar(contentDiv);
  contentDiv.appendChild(section);
  renderFooter(contentDiv);
};

window.onload = () => {
  renderPage();
  renderMenuSection();
};
