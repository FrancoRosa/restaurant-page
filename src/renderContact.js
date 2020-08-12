import { columnContainerArticle } from './renders';

const renderContactSection = () => {
  const text1 = 'We are at the traintrack to Hidrolectrica KM115, it'
    + ' is an hour walk from Aguas Calientes (Ask your nearest train station for available departures)'
    + ' call us +51 984894723 or write an email to: serviciosmandor@gmail.com';

  const title = document.createElement('h1');
  title.classList = 'title has-text-centered';
  title.textContent = 'Visit us';

  const columnsDiv = document.createElement('div');
  columnsDiv.classList = 'columns is-centered';

  columnsDiv.append(columnContainerArticle('map', text1));

  const section = document.querySelector('section');
  section.innerHTML = '';
  section.appendChild(title);
  section.appendChild(columnsDiv);
};

export default renderContactSection;