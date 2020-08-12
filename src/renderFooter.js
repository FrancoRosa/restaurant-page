const renderFooter = (container) => {
  const footer = document.createElement('footer');
  footer.classList = 'footer';
  const contentDiv = document.createElement('div');
  contentDiv.classList = 'content has-text-centered';
  const textP = document.createElement('p');
  textP.innerHTML = '<strong>RestaurantPage</strong> by <a href="https://github.com/FrancoRosa">'
    + 'Franco Rosa</a>. 2020</a>. Images from <a href="https://unsplash.com/">Unplash</a>.'
    + ' Main style <strong>Bulmaswatch</strong> by <a href="https://jgog.in/">Jenil Gogari</a>.' 
  contentDiv.appendChild(textP);
  footer.appendChild(contentDiv);
  container.appendChild(footer);
};

export default renderFooter;