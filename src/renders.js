export const renderMenuSection = (container) =>{
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

  const section = document.createElement('section');
  section.appendChild(title);
  section.appendChild(columnsDiv);
  
  container.appendChild(section);
};

export const renderAboutSection = (container) => {
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
  
  columnsDiv.append(columnContainerArticle("lands", text1))

  const section = document.createElement('section');
  section.appendChild(title);
  section.appendChild(columnsDiv);
  
  container.appendChild(section);
};

export const renderContactSection = (container) => {
  const text1 = 'We are at the traintrack to Hidrolectrica KM115, it'
    + ' is an hour walk from Aguas Calientes (Ask your nearest train station for available departures)'
    + ' call us +51 984894723 or write an email to: serviciosmandor@gmail.com';

  const title = document.createElement('h1');
  title.classList = 'title has-text-centered';
  title.textContent = 'Visit us';
  
  const columnsDiv = document.createElement('div');
  columnsDiv.classList = 'columns is-centered';
  
  columnsDiv.append(columnContainerArticle("map", text1));

  const section = document.createElement('section');
  section.appendChild(title);
  section.appendChild(columnsDiv);
  
  container.appendChild(section);
};

export const clearContainer = () => {
  const contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = '';
};

export const renderHome = () => {
  const contentDiv = document.querySelector('#content');
  clearContainer();
  renderNavbar(contentDiv);
  renderMenuSection(contentDiv);
  renderFooter(contentDiv);
};

export const renderAbout = () => {
  const contentDiv = document.querySelector('#content');
  clearContainer();
  renderNavbar(contentDiv);
  renderAboutSection(contentDiv);
  renderFooter(contentDiv);
};

export const renderContact = () => {
  const contentDiv = document.querySelector('#content');
  clearContainer();
  renderNavbar(contentDiv);
  renderContactSection(contentDiv);
  renderFooter(contentDiv);
};
