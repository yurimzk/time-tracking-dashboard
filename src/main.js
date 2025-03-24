document.addEventListener('DOMContentLoaded', function () {
  const dailyBtn = document.querySelector('.daily-btn');
  const weeklyBtn = document.querySelector('.weekly-btn');
  const monthlyBtn = document.querySelector('.monthly-btn');

  let json

  fetch('data.json')
    .then((response) => {
      if (!response.ok) throw new Error('Something went wrong!')

      return response.json()
    })
    .then((data) => {
      json = data
    })

  function updateDOM(timeframe, currentData, previousData) {
    const categories = ['work', 'play', 'study', 'exercise', 'social', 'self-care'];

    categories.forEach((category, index) => {
      document.querySelector(`.current-${category}-day`).innerHTML = `${currentData[index]}hrs`;

      let previousLabel;
      if (timeframe === 'daily') {
        previousLabel = 'Last Day';
      } else if (timeframe === 'weekly') {
        previousLabel = 'Last Week';
      } else if (timeframe === 'monthly') {
        previousLabel = 'Last Month';
      }

      document.querySelector(`.previous-${category}-day`).innerHTML = `${previousLabel} - ${previousData[index]}hrs`;
    });
  }

  function handleTimeframe(timeframe) {
    if (json) {
      const currentData = [];
      const previousData = [];

      json.forEach(item_ => {
        currentData.push(item_.timeframes[timeframe].current);
        previousData.push(item_.timeframes[timeframe].previous);
      })
      updateDOM(timeframe,currentData, previousData);
    }
  }

  dailyBtn.addEventListener('click', function () {
    handleTimeframe('daily');
    dailyBtn.style.color = 'white';
    weeklyBtn.style.color = 'hsl(235, 45%, 61%)';
    monthlyBtn.style.color = 'hsl(235, 45%, 61%)';
  })

  weeklyBtn.addEventListener('click', function () {
    handleTimeframe('weekly');
    weeklyBtn.style.color = 'white';
    dailyBtn.style.color = 'hsl(235, 45%, 61%)';
    monthlyBtn.style.color = 'hsl(235, 45%, 61%)';
  })

  monthlyBtn.addEventListener('click', function () {
    handleTimeframe('monthly');
    monthlyBtn.style.color = 'white';
    dailyBtn.style.color = 'hsl(235, 45%, 61%)';
    weeklyBtn.style.color = 'hsl(235, 45%, 61%)';
  })
})
