const navLinks = document.querySelectorAll('nav a');
const contentContainer = document.getElementById('content');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor tag behavior

    const page = link.dataset.page; // Get the data-page attribute value

    // Load content based on the clicked link
    fetch(`pages/${page}.html`)
      .then(response => response.text())
      .then(html => {
        contentContainer.innerHTML = html;
      })
      .catch(error => console.error(error));
  });
});
