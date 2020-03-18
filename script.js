var submit = document.getElementById("searchbtn");
var city = document.getElementById("city");
var recent = document.getElementById("recent");
var today = document.getElementById("today");
var currentDate = moment().format("MMM-DD-YYYY");

// current forecast variables 
var todayTemp = document.getElementById("currenttemp");
var todayHumid = document.getElementById("currenthumidity");
var todayWind = document.getElementById("currentwind");
var todayIndex = document.getElementById("currentindex");
var todayCloud = document.getElementById("currentcloud");
var todayIcon = document.getElementById("main-icon");

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




var foreCast = [
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
    $("#recent").append("<li>" + input + "</li>");

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

        $(todayIcon).attr("src","http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png" )


        $(todayHumid).text("Humidity: " + response.main.humidity);

        $(todayWind).text("Wind speed: " + response.wind.speed);

        $(todayCloud).text("Clouds: " + response.clouds.all);

        //   $(todayIndex).text("UV Index: " + response.main.temp)

    });

    var dayQuery = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&units=imperial&appid=" + key;

    $.ajax({
        url: dayQuery,
        method: "GET"
    }).then(function (result) {
        console.log(result);

       
          var  dayOne = result.list[4];
          var  dayTwo = result.list[11];
          var  dayThree = result.list[19];
          var  dayFour = result.list[27];
          var  dayFive = result.list[35];
        //   var forecastIcon = result.list[i].weather[0].icon;
// var resultList = [result.list[4],result.list[11],result.list[19],result.list[27],result.list[35]];
//         for (var i = 0; i < resultList.length; i++) {
            
//                 $("#img-1").attr("src", result.list[i].weather[0].icon);
           
//         };



        // setting forecast info to proper html spots
        $("#temp-1").text(foreCast[0].temp + dayOne.main.temp);
        $("#img-1").attr("src","http://openweathermap.org/img/wn/" + dayOne.weather[0].icon + "@2x.png" )
        $("#humidity-1").text(foreCast[0].humidity + dayOne.main.humidity);
        $("#wind-1").text(foreCast[0].wind + dayOne.wind.speed);
        // $("#index-1").text(foreCast[0].index + dayOne.main.temp);
        $("#cloud-1").text(foreCast[0].cloud + dayOne.clouds.all);

        $("#temp-2").text(foreCast[0].temp + dayTwo.main.temp);
        $("#img-2").attr("src","http://openweathermap.org/img/wn/" + dayTwo.weather[0].icon + "@2x.png" )
        $("#humidity-2").text(foreCast[0].humidity + dayTwo.main.humidity);
        $("#wind-2").text(foreCast[0].wind + dayTwo.wind.speed);
        // $("#index-2").text(foreCast[0].index + result.list[4].main.temp);
        $("#cloud-2").text(foreCast[0].cloud + dayTwo.clouds.all);

        $("#temp-3").text(foreCast[0].temp + dayThree.main.temp);
        $("#img-3").attr("src","http://openweathermap.org/img/wn/" + dayThree.weather[0].icon + "@2x.png" )
        $("#humidity-3").text(foreCast[0].humidity + dayThree.main.humidity);
        $("#wind-3").text(foreCast[0].wind + dayThree.wind.speed);
        // $("#index-3").text(foreCast[0].index + dayThree.main.temp);
        $("#cloud-3").text(foreCast[0].cloud + dayThree.clouds.all);

        $("#temp-4").text(foreCast[0].temp + dayFour.main.temp);
        $("#img-4").attr("src","http://openweathermap.org/img/wn/" + dayFour.weather[0].icon + "@2x.png" )
        $("#humidity-4").text(foreCast[0].humidity + dayFour.main.humidity);
        $("#wind-4").text(foreCast[0].wind + dayFour.wind.speed);
        // $("#index-4").text(foreCast[0].index + dayFour.main.temp);
        $("#cloud-4").text(foreCast[0].cloud + dayFour.clouds.all);

        $("#temp-5").text(foreCast[0].temp + dayFive.main.temp);
        $("#img-5").attr("src","http://openweathermap.org/img/wn/" + dayFive.weather[0].icon + "@2x.png" )
        $("#humidity-5").text(foreCast[0].humidity + dayFive.main.humidity);
        $("#wind-5").text(foreCast[0].wind + dayFive.wind.speed);
        // $("#index-5").text(foreCast[0].index + dayFive.main.temp);
        $("#cloud-5").text(foreCast[0].cloud + dayFive.clouds.all);









    });
});