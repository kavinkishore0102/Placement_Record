const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Aveg. Package', 'Aveg. Stipend'],
    datasets: [{
      data: [19, 10],
      borderWidth: 1,
      barThickness: 40,
      backgroundColor: [ 
        'rgba(98, 154, 164, 0.8)', 
        'rgba(48, 61, 63, 0.8)'   
      ] 
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
