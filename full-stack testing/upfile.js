// Add event listener for form submission
letterForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Clear existing table rows
  const tableBody = lettersTable.getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';

  // Get data from each letter section
  const letterSections = document.querySelectorAll('.letter-section');
  letterSections.forEach(section => {
    const companyName = section.querySelector('input[name="companyName"]').value;
    const companyType = section.querySelector('select[name="companyType"]').value;
    const source = section.querySelector('select[name="source"]').value;
    const placementLocation = section.querySelector('input[name="placementLocation"]').value;
    const letterDate = section.querySelector('input[name="letterDate"]').value;
    const compensation = section.querySelector('input[name="compensation"]').value;
    const proofOfLetter = section.querySelector('input[name="proofOfLetter"]').files[0]; // Access the first selected file
    
    // Create table row and populate with form data
    const row = tableBody.insertRow();
    row.insertCell().textContent = companyName;
    row.insertCell().textContent = companyType;
    row.insertCell().textContent = source;
    row.insertCell().textContent = placementLocation;
    row.insertCell().textContent = letterDate;
    row.insertCell().textContent = compensation;
    row.insertCell().textContent = proofOfLetter ? proofOfLetter.name : 'N/A';
  });
});