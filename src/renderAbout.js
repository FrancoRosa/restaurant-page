import { columnContainerArticle } from './renders';

const renderAboutSection = () => {
  const text1 = 'At Mamá Angélica we grow the products we use on our restaurant, '
    + 'Angelica was our grantmother and  as she did we take care of the lands that '
    + 'soround this restaurant oferring the best organic food making our work '
    + 'susteinable and given our visitors the experience of responsable farming '
    + 'and nature experience';

  const title = document.createElement('h1');
  title.classList = 'title has-text-centered';
  title.textContent = 'Our story';

  const columnsDiv = document.createElement('div');
  columnsDiv.classList = 'columns is-centered';

  columnsDiv.append(columnContainerArticle('lands', text1));

  const section = document.querySelector('section');
  section.innerHTML = '';
  section.appendChild(title);
  section.appendChild(columnsDiv);
};

export default renderAboutSection;
