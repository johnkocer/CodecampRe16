function getWeatherForecastsData(){
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    var today= new Date();
    var tomorrow= new Date();
    tomorrow.setDate(today.getDate() +1);
    var followingDay= new Date();
    followingDay.setDate(today.getDate() +2);
    let date1 = today.toLocaleDateString('en-US', DATE_OPTIONS)
    let date2 = tomorrow.toLocaleDateString('en-US', DATE_OPTIONS)
    let date3 = followingDay.toLocaleDateString('en-US', DATE_OPTIONS)

    const forecasts =  [
      { dateFormatted: date1, temperatureC: 28, summary: "Bracing",temperatureF: 82 },
      { dateFormatted: date2 , temperatureC: 38, summary: "Balmy",temperatureF: 100 },
      { dateFormatted: date3 , temperatureC: 54, summary: "Hot",temperatureF: 129 }
    ];
    return   forecasts;
  }

  const getWeatherForecasts = () => {
return new Promise(function (resolve, reject) {
    resolve(getWeatherForecastsData());
    });
  }

  const FetchDataService = {
    getWeatherForecasts
}

export {FetchDataService}