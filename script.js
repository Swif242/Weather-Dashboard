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

// 5 day forecast variables
var dayOne = document.getElementById("1");
var dayTwo = document.getElementById("2");
var dayThree = document.getElementById("3");
var dayFour = document.getElementById("4");
var dayFive = document.getElementById("5");
// setting the current date
$(today).text("Today is: " + currentDate);


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


    // key: 9fe131f24d037a833f92f566cc065b26
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=imperial&appid=9fe131f24d037a833f92f566cc065b26";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);



        $(todayTemp).text("Temp: " + response.main.temp)

        $(todayHumid).text("Humididty: " + response.main.humidity)

        $(todayWind).text("Wind speed: " + response.wind.speed)

        //   $(todayIndex).text("UV Index: " + response.main.temp)

    });

});