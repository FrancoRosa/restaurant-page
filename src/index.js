import './styles/bulma.min.css';
import './styles/style.css';
import renderFooter from './renderFooter';
import renderNavbar from './renderNavbar';
import renderMenuSection from './renderHome';

const renderPage = () => {
  const contentDiv = document.querySelector('#content');
  const section = document.createElement('section');

  renderNavbar(contentDiv);
  contentDiv.appendChild(section);
  renderFooter(contentDiv);
  renderMenuSection();
};

window.onload = () => renderPage();
