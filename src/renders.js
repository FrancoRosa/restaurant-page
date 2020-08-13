export const columnContainer = (imageClass, text) => {
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

export const columnContainerArticle = (imageClass, text) => {
  const columnDiv = document.createElement('div');
  columnDiv.classList = 'column is-10';
  const card = document.createElement('div');
  card.classList = 'card';
  const cardImg = document.createElement('div');
  cardImg.classList = 'card-image';

  if (imageClass === 'map') {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.google.com/maps/embed?'
    + 'pb=!1m18!1m12!1m3!1d3885.2136213304607!2d-72.54211758545479'
    + '!3d-13.148921090739716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1'
    + '3.1!3m3!1m2!1s0x916d9ba8123790bd%3A0x691e56d7c1a6d1c1!2sMama'
    + '%20Ang%C3%A9lica!5e0!3m2!1sen!2spe!4v1597171286742!5m2!1sen!2spe');
    cardImg.appendChild(iframe);
  } else {
    const figure = document.createElement('figure');
    figure.classList = 'image is-3by1 '.concat(imageClass);
    cardImg.appendChild(figure);
  }

  card.appendChild(cardImg);

  const cardCont = document.createElement('div');
  cardCont.classList = 'card-content';
  const divCont = document.createElement('div');
  divCont.innerHTML = text;
  divCont.classList = 'has-text-centered';
  cardCont.appendChild(divCont);
  card.appendChild(cardCont);

  columnDiv.appendChild(card);
  return columnDiv;
};
