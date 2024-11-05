fetch('../dist/icon_map.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch mapping.json: ' + response.statusText);
    }
    return response.json();
  })
  .then(iconData => {
    console.log('Fetched icon data:', iconData);

    const iconGrid = document.getElementById('iconGrid');
    iconData.forEach(icon => {
      const container = document.createElement('div');
      container.classList.add('icon-container');

      const title = document.createElement('span');
      title.classList.add('icon-title');
      title.textContent = icon.appNames.join(', ');

      const iconElement = document.createElement('span');
      iconElement.classList.add('icon');
      iconElement.textContent = icon.iconName;

      container.appendChild(title);
      container.appendChild(iconElement);
      iconGrid.appendChild(container);
    });
  })
  .catch(error => {
    console.error('Error loading icons:', error);
  });


