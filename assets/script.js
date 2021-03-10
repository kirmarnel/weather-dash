var searchBtn = document.querySelector('#searchBtn')
var searchInput = document.querySelector('#searchInput') 
var forcast = document.querySelector('#forcast')
var city = searchInput.value

var url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=96d6bb7f498a2f8b196feb76deb7f7e8';

searchBtn.addEventListener('click', function(){
    fetch(url).then(function(response){
        response.json().then(function (data) {
            console.log(data);
            
            
        })
    })
})


