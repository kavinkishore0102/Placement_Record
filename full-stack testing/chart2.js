 const data = {
    labels: ['Skill 1', 'skill 2', 'skill 3'],  // Replace with actual company names
    datasets: [{
      label: 'skill Score',
      data: [5, 6.5, 8.1], // Replace with actual offer values (package or stipend)
      backgroundColor: [
        'rgba(98, 154, 164, 0.8)',
        'rgba(48, 61, 63, 0.8)',
        'rgba(255, 193, 7, 0.8)'
      ] // Optional: Set bar colors
    }]
  };
  
  const config = {
    type: 'bar',
    data: data,
    options: {
      indexAxis: 'y',
      elements: {
        bar: {
          borderWidth: 2,
        }
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Skill Score'
        }
      }
    },
  };
  
  new Chart(document.getElementById('pieChart'), config);
  