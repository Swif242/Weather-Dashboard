var submit = document.getElementById("searchbtn");
var city = document.getElementById("city");
var recent = document.getElementById("recent");
var today = document.getElementById("today");
var currentDate = moment().format("MMM-DD-YYYY");
// forecast variables 
var todayTemp = document.getElementById("currenttemp");
var todayHumid = document.getElementById("currenthumidity");
var todayWind = document.getElementById("currentwind");
var todayIndex = document.getElementById("currentindex");
var todayCloud = document.getElementById("currentcloud");

// 5 day forecast dates variables
var dateOne = document.getElementById("1");
$(dateOne).text("Date: " + moment().add(1, "day").format("MMM-DD-YYYY"));

var dateTwo = document.getElementById("2");
$(dateTwo).text("Date: " + moment().add(2, "day").format("MMM-DD-YYYY"));

var dateThree = document.getElementById("3");
$(dateThree).text("Date: " + moment().add(3, "day").format("MMM-DD-YYYY"));

var dateFour = document.getElementById("4");
$(dateFour).text("Date: " + moment().add(4, "day").format("MMM-DD-YYYY"));

var dateFive = document.getElementById("5");
$(dateFive).text("Date: " + moment().add(5, "day").format("MMM-DD-YYYY"));

// setting the current date
$(today).text("Today is: " + currentDate);

// icon variables 
var clearSkyDay = "http://openweathermap.org/img/wn/01d@2x.png";
var clearSkyNight = "http://openweathermap.org/img/wn/01n@2x.png";
var fewCloudsDay = "http://openweathermap.org/img/wn/02d@2x.png";
var fewCloudsNight = "http://openweathermap.org/img/wn/02n@2x.png";
var scatterdClouds = "http://openweathermap.org/img/wn/03d@2x.png";
var brokenClouds = "http://openweathermap.org/img/wn/04d@2x.png";
var showerRain = "http://openweathermap.org/img/wn/09d@2x.png";
var rainDay = "http://openweathermap.org/img/wn/10d@2x.png";
var rainNight = "http://openweathermap.org/img/wn/10n@2x.png";
var thunderStorm = "http://openweathermap.org/img/wn/11d@2x.png";
var snow = "http://openweathermap.org/img/wn/13d@2x.png";
var mist = "http://openweathermap.org/img/wn/50d@2x.png";

var icons = ["#img-1","#img-2","#img-3","#img-4","#img-5"];






var days = [
    {
        temp: "Temp: ",
        humidity: "Humidity: ",
        wind: "Wind Speed: ",
        index: "UV Index: ",
        cloud: "Clouds: ",
    },

    
]

$(submit).on("click", function (event) {
    event.preventDefault();
    var input = $.trim($("#inputbox").val());
    if (input == "") {
        alert("Must enter a city to continue");

    };

    //   takes the value from the input box and writes to the city variable
    $(city).text("City: " + input);
    //   clear input box after submitted (doesn't work yet)
    $(input).remove();


    var key = "9fe131f24d037a833f92f566cc065b26";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=imperial&appid=" + key;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);


        // current day weather forecast
        $(todayTemp).text("Temp: " + response.main.temp);

        $(todayHumid).text("Humidity: " + response.main.humidity);

        $(todayWind).text("Wind speed: " + response.wind.speed);

        $(todayCloud).text("Clouds: " + response.clouds.all);

        //   $(todayIndex).text("UV Index: " + response.main.temp)

    });

    var foreCast = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&units=imperial&appid=" + key;

    $.ajax({
        url: foreCast,
        method: "GET"
    }).then(function (result) {
        console.log(result);
        var dayOne = result.list[4];
        var dayTwo = result.list[11];
        var dayThree = result.list[19];
        var dayFour = result.list[27];
        var dayFive = result.list[35];

       



        // setting forecast info to proper html spots
            $("#temp-1").text(days[0].temp + dayOne.main.temp);
            $("#humidity-1").text(days[0].humidity + dayOne.main.humidity);
            $("#wind-1").text(days[0].wind + dayOne.wind.speed);
            // $("#index-1").text(days[0].index + dayOne.main.temp);
            $("#cloud-1").text(days[0].cloud + dayOne.clouds.all);

            $("#temp-2").text(days[0].temp + dayTwo.main.temp);
            $("#humidity-2").text(days[0].humidity + dayTwo.main.humidity);
            $("#wind-2").text(days[0].wind + dayTwo.wind.speed);
            // $("#index-2").text(days[0].index + result.list[4].main.temp);
            $("#cloud-2").text(days[0].cloud + dayTwo.clouds.all);

            $("#temp-3").text(days[0].temp + dayThree.main.temp);
            $("#humidity-3").text(days[0].humidity + dayThree.main.humidity);
            $("#wind-3").text(days[0].wind + dayThree.wind.speed);
            // $("#index-3").text(days[0].index + dayThree.main.temp);
            $("#cloud-3").text(days[0].cloud + dayThree.clouds.all);

            $("#temp-4").text(days[0].temp + dayFour.main.temp);
            $("#humidity-4").text(days[0].humidity + dayFour.main.humidity);
            $("#wind-4").text(days[0].wind + dayFour.wind.speed);
            // $("#index-4").text(days[0].index + dayFour.main.temp);
            $("#cloud-4").text(days[0].cloud + dayFour.clouds.all);

            $("#temp-5").text(days[0].temp + dayFive.main.temp);
            $("#humidity-5").text(days[0].humidity + dayFive.main.humidity);
            $("#wind-5").text(days[0].wind + dayFive.wind.speed);
            // $("#index-5").text(days[0].index + dayFive.main.temp);
            $("#cloud-5").text(days[0].cloud + dayFive.clouds.all);







    

    });
});