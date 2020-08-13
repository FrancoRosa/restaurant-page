import './styles/bulma.min.css';
import './styles/style.css';
import renderFooter from './renderFooter';
import renderNavbar from './renderNavbar';
import renderMenuSection from './renderHome';
import renderAboutSection from './renderAbout';
import renderContactSection from './renderContact';

const addTabNavigation = () =>{
  const navButtons = document.querySelectorAll('.is-outlined');
  navButtons[0].addEventListener('click', renderMenuSection);
  navButtons[1].addEventListener('click', renderAboutSection);
  navButtons[2].addEventListener('click', renderContactSection);
};

const renderPage = () => {
  const contentDiv = document.querySelector('#content');
  const section = document.createElement('section');

  renderNavbar(contentDiv);
  contentDiv.appendChild(section);
  renderFooter(contentDiv);
  renderMenuSection();
};

window.onload = () => {
  renderPage();
  addTabNavigation();
};