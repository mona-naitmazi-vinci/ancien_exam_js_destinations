const HomePage = () => {
  const main = document.querySelector('main');

  main.innerHTML = `<ul id ="list"></ul>`;

  fetch('https://places-exam-api.azurewebsites.net/places')
  .then((response) => {
    var listContainer = document.getElementById('list');

      // Iterate through the array and create list items
      for (var i = 0; i < response.length; i++) {
        // Create a list item
        var listItem = document.createElement('li');

        // Set the text content of the list item
        listItem.textContent = response[i];

        // Append the list item to the list container
        listContainer.appendChild(listItem);
      }
  })

};

export default HomePage;
