let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");

//thedog api → Breeds 데이터 가져오기
function getDogData() {
    var apiUrl = 'https://api.thedogapi.com/v1/breeds?attach_breed=0';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        var section = document.getElementById('Input_ian001');
  
        // Clear existing content in the section
        section.innerHTML = '';
  
        var breedsPerPage = 9;
        var totalPages = Math.ceil(data.length / breedsPerPage);
  
        var currentPage = 1; // Track the current page
  
        // Display breeds for the specified page
        function displayBreeds(page) {
          var startIndex = (page - 1) * breedsPerPage;
          var endIndex = page * breedsPerPage;
          var breeds = data.slice(startIndex, endIndex);
  
          var table = document.createElement('table');
          table.style.width = '100%'; // Set table width to 100%
  
          for (var i = 0; i < breeds.length; i += 3) {
            var row = document.createElement('tr');
  
            for (var j = i; j < i + 3; j++) {
              if (j >= breeds.length) break;
  
              var breed = breeds[j];
  
              var breedElement = document.createElement('td');
              breedElement.style.width = '33.33%'; // Set column width to 33.33%
              breedElement.innerHTML = `
                <h3>${breed.name}</h3>
                <p>Description: ${breed.description}</p>
                <p>Life span: ${breed.life_span}</p>
                <img src="${breed.image.url}" alt="${breed.name} dog" width="200">
              `;
  
              row.appendChild(breedElement);
            }
  
            table.appendChild(row);
          }
  
          section.appendChild(table);
        }
  
        // Function to create and update page number hyperlinks
        function createPageNumberLinks() {
          // Clear existing content in the section
          section.innerHTML = '';
  
          var pageNumberDiv = document.createElement('div');
          pageNumberDiv.style.textAlign = 'center';
  
          for (var page = 1; page <= totalPages; page++) {
            var pageNumberLink = document.createElement('a');
            pageNumberLink.textContent = page;
            pageNumberLink.href = '#';
            pageNumberLink.style.marginRight = '5px';
  
            // Add event listener to display breeds when a page number is clicked
            pageNumberLink.addEventListener('click', function (e) {
              e.preventDefault();
              currentPage = parseInt(e.target.textContent);
              createPageNumberLinks(); // Re-create the page number hyperlinks
              displayBreeds(currentPage); // Display breeds for the selected page              
            });
  
            pageNumberDiv.appendChild(pageNumberLink);
          }
  
          section.appendChild(pageNumberDiv);
        }
  
        // Create initial page number hyperlinks
        createPageNumberLinks();
        
        // Display breeds for the initial page
        displayBreeds(currentPage);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Call the getDogData function
  getDogData();
  
  
  
  
  
  

    var apiUrl = 'https://api.github.com/users/Chelin-Park/repos';
    console.log(apiUrl);
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        var section = document.getElementById('Projects');
  
        // Clear existing content in the section
        section.innerHTML = '<h1>★Projects</h1>';
  
        data.forEach(project => {
          var projectElement = document.createElement('div');
          projectElement.innerHTML = `<h2>${project.name}</h2><p>Description: ${project.description}</p><p>Language: ${project.language}</p>`;
          section.appendChild(projectElement);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  