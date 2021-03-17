//Current weather variables
var searchBtn = document.querySelector('#searchBtn');
var searchInput = document.querySelector('#searchInput'); 
var forcast = document.querySelector('#forcast');
var cityName = document.querySelector('#cityName');
var date = document.querySelector('#date');
var temp = document.querySelector('#temp');
var hum = document.querySelector('#hum');
var wind = document.querySelector('#wind');
var uv = document.querySelector('#uv')
var uvIndex = document.querySelector('#uvIndex')
var icon = document.querySelector('#icon');
var currentDate = moment().format('l'); 
//Five day forcast variables
var day1 = moment().add(1, 'day').format('l'); 
var day2 = moment().add(2, 'day').format('l'); 
var day3 = moment().add(3, 'day').format('l'); 
var day4 = moment().add(4, 'day').format('l'); 
var day5 = moment().add(5, 'day').format('l'); 
var iconOne = document.querySelector('#iconOne')
var iconTwo = document.querySelector('#iconTwo')
var iconThree = document.querySelector('#iconThree')
var iconFour = document.querySelector('#iconFour')
var iconFive = document.querySelector('#iconFive')


//Call for current weather
searchBtn.addEventListener('click', function(){
    var city = searchInput.value
    var currentUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=imperial&appid=96d6bb7f498a2f8b196feb76deb7f7e8';
    var fiveDayUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ city +'&units=imperial&appid=96d6bb7f498a2f8b196feb76deb7f7e8'
    fetch(currentUrl).then(function(response){
        response.json().then(function (data) {
            console.log(data)
            cityName.textContent=data.name + ' (' + currentDate + ')'
            temp.textContent='Temperature: ' + data.main.temp + ' Degrees F'
            hum.textContent='Humidity: ' + data.main.humidity + '%'
            wind.textContent= 'Wind Speed: ' + data.wind.speed + 'mph'
            var iconCode = data.weather[0].icon
            var iconUrl = 'http://openweathermap.org/img/wn/' + iconCode + '@2x.png'
            icon.setAttribute('src' , iconUrl)
            var lat = data.coord.lat
            var lon =data.coord.lon
            var uvUrl = 'https://api.openweathermap.org/data/2.5/uvi?lat=' + lat + '&lon=' + lon + '&appid=96d6bb7f498a2f8b196feb76deb7f7e8'
            fetch(uvUrl).then(function(response){
                response.json().then(function(data){
                    uv.textContent='UV Index: '+ data.value
                    if (data.value <= 3){
                        uvIndex.classList.add('good')
                    }
                    else if (data.value > 3 && data.value <= 6){
                        uvIndex.classList.add('moderate')
                    }

                    else if (data.value > 6) {
                        uvIndex.classList.add('bad')
                    }
                })
            })

    
    })
    //Call for five day forcast
    fetch(fiveDayUrl).then(function(response){
        response.json().then(function(data){
            console.log(data)
            document.querySelector('#tempOne').textContent='Temperature: ' + data.list[0].main.temp + ' Degrees F'
            document.querySelector('#tempTwo').textContent='Temperature: ' + data.list[8].main.temp + ' Degrees F'
            document.querySelector('#tempThree').textContent='Temperature: ' + data.list[16].main.temp + ' Degrees F'
            document.querySelector('#tempFour').textContent='Temperature: ' + data.list[24].main.temp + ' Degrees F'
            document.querySelector('#tempFive').textContent='Temperature: ' + data.list[32].main.temp + ' Degrees F'
            document.querySelector('#humOne').textContent='Humidity: ' + data.list[0].main.humidity + '%'
            document.querySelector('#humTwo').textContent='Humidity: ' + data.list[8].main.humidity + '%'
            document.querySelector('#humThree').textContent='Humidity: ' + data.list[16].main.humidity + '%'
            document.querySelector('#humFour').textContent='Humidity: ' + data.list[24].main.humidity + '%'
            document.querySelector('#humFive').textContent='Humidity: ' + data.list[32].main.humidity + '%'
            
            var iconCodeOne = data.list[0].weather[0].icon
            var iconUrlOne = 'http://openweathermap.org/img/wn/' + iconCodeOne + '@2x.png'
            iconOne.setAttribute('src', iconUrlOne)

            var iconCodeTwo = data.list[8].weather[0].icon
            var iconUrlTwo = 'http://openweathermap.org/img/wn/' + iconCodeTwo + '@2x.png'
            iconTwo.setAttribute('src', iconUrlTwo)

            var iconCodeThree = data.list[16].weather[0].icon
            var iconUrlThree = 'http://openweathermap.org/img/wn/' + iconCodeThree + '@2x.png'
            iconThree.setAttribute('src', iconUrlThree)

            var iconCodeFour = data.list[24].weather[0].icon
            var iconUrlFour = 'http://openweathermap.org/img/wn/' + iconCodeFour + '@2x.png'
            iconFour.setAttribute('src', iconUrlFour)

            var iconCodeFive = data.list[32].weather[0].icon
            var iconUrlFive = 'http://openweathermap.org/img/wn/' + iconCodeFive + '@2x.png'
            iconFive.setAttribute('src', iconUrlFive)
        })
    })
    })

})

