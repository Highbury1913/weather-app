var weather = []

var myWeather = function(data){
	var newWeather= {
		country: data.sys.country,
		name: data.name,
		clouds: data.clouds.all,
		humidity: data.main.humidity,
		weather: data.weather[0].description,
	}

	weather.push(newWeather)

	$('.search-data').val('');

	addToHtml();
};


	var fetch = function () {
		var city = $('.search-data').val();
		console.log("here");
  $.ajax({
    method: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=d703871f861842b79c60988ccf3b17ec",
    dataType: "json",
    success: function(data) {
      console.log(data);
      myWeather(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
};

var addToHtml = function(){
	$('.city-disp').empty()
	var source = $('#weather-template').html();

	var template = Handlebars.compile(source);

	for (var i = 0; i < weather.length; i++) {
		var newHTML= template(weather[i]);
		$('.city-disp').append(newHTML)
	}
};

$('.bar').on('click', function(e){
	e.preventDefault();

	fetch();
	addComment();
})


var addComment = function(){
	var commentIn = $('.comment-data').val();

	$('.comment-data').empty();

	var source = $('#comment-template').html();
	var template = Handlebars.compile(source);
	var commentHTML = template(commentIn);
	$('.myComments').append(commentHTML);

};

$('.theComments').on('click', function(){
	
})