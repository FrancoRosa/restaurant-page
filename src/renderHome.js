import { columnContainer } from './renders';

const renderMenuSection = () => {
  const text1 = 'Breakfast, fresh bread baked at home, with abocado and eggs, accompanied with herbs plus orange juice and coffee.';
  const text2 = 'Vegetarian lunch with fruits and quail eggs. You can also order any of our delicious soups with cheesse and bread.';
  const text3 = 'Mixed dinner, with pasta and beans or rice, ask for your favorite beverage or wine. You can order in advance.';

  const title = document.createElement('h1');
  title.classList = 'title has-text-centered';
  title.textContent = 'This is our menu';

  const columnsDiv = document.createElement('div');
  columnsDiv.classList = 'columns is-centered is-mobile';

  columnsDiv.appendChild(columnContainer('dish1', text1));
  columnsDiv.appendChild(columnContainer('dish2', text2));
  columnsDiv.appendChild(columnContainer('dish3', text3));

  const section = document.querySelector('section');
  section.innerHTML = '';
  section.appendChild(title);
  section.appendChild(columnsDiv);
};

export default renderMenuSection;