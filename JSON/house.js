
fetch('houseData.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('architectureTable');

    data.forEach(item => {

      const card = document.createElement('div');
      card.className = 'card';


      const title = document.createElement('h2');
      title.textContent = item.title;


      const img = document.createElement('img');
      img.src = item.imageUrl;
      img.alt = item.altText;


      const description = document.createElement('p');
      description.textContent = item.text;


      const link = document.createElement('a');
      link.href = item.WebsiteUrl;
      link.target = "_blank";
      link.textContent = "Learn more";


      card.appendChild(title);
      card.appendChild(img);
      card.appendChild(description);
      card.appendChild(link);


      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
