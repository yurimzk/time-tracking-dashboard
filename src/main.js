document.addEventListener('DOMContentLoaded', function() {
  const daily = document.querySelector('.daily');
  const weekly = document.querySelector('.weekly');
  const monthly = document.querySelector('.monthly');

  let json;

  fetch('data.json').then((response) => {
    if (!response.ok)
      throw new Error('Something went wrong!');

      return response.json();
  }).then((data) => {
    json = data;
  })


  daily.addEventListener('click', function() {
    console.log('testing');
  })

  weekly.addEventListener('click', function() {
    console.log('testing 1');
  })

  monthly.addEventListener('click', function() {
    console.log('testing 2');
  })
})
