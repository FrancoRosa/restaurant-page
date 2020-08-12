const columnContainer = (imageClass, text) => {
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
};

const columnContainerArticle = (imageClass, text) => {
  const columnDiv = document.createElement('div');
  columnDiv.classList = 'column is-10';
  const card = document.createElement('div');
  card.classList = 'card';
  const cardImg = document.createElement('div');
  cardImg.classList = 'card-image';
  const figure = document.createElement('figure');

  if (imageClass === 'map') {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.google.com/maps/embed?'
    + 'pb=!1m18!1m12!1m3!1d3885.2136213304607!2d-72.54211758545479'
    + '!3d-13.148921090739716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1'
    + '3.1!3m3!1m2!1s0x916d9ba8123790bd%3A0x691e56d7c1a6d1c1!2sMama'
    + '%20Ang%C3%A9lica!5e0!3m2!1sen!2spe!4v1597171286742!5m2!1sen!2spe');
    cardImg.appendChild(iframe);
  } else {
    figure.classList = 'image is-3by1 '.concat(imageClass);
    cardImg.appendChild(figure);
  }

  card.appendChild(cardImg);

  const cardCont = document.createElement('div');
  cardCont.classList = 'card-content';
  const divCont = document.createElement('div');
  divCont.innerHTML = text;
  cardCont.appendChild(divCont);
  card.appendChild(cardCont);

  columnDiv.appendChild(card);
  return columnDiv;
};

export const renderMenuSection = () => {
  const text1 = 'Breakfast, fresh bread baked at home, with abocado and eggs, accompanied with herbs plus orange juice and coffee.';
  const text2 = 'Vegetarian lunch with fruits and quail eggs. You can also order any of our delisious soups with cheesse and bread';
  const text3 = 'Mixed dinner, with pasta and beans or rice, ask for your favorite beverage or wine.';

  const title = document.createElement('h1');
  title.classList = 'title has-text-centered';
  title.textContent = 'This is our menu';

  const columnsDiv = document.createElement('div');
  columnsDiv.classList = 'columns is-centered';

  columnsDiv.appendChild(columnContainer('dish1', text1));
  columnsDiv.appendChild(columnContainer('dish2', text2));
  columnsDiv.appendChild(columnContainer('dish3', text3));

  const section = document.querySelector('section');
  section.innerHTML = '';
  section.appendChild(title);
  section.appendChild(columnsDiv);
};

export const renderAboutSection = () => {
  const text1 = 'At Mamá Angélica we grow the products we use on our restaurant,'
    + 'Angelica was our grantmother and  as she did we take care of the lands that'
    + 'soround this restaurant oferring the best organic food making our work'
    + 'susteinable and given our visitors the experience of responsable faming'
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

export const renderContactSection = () => {
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
