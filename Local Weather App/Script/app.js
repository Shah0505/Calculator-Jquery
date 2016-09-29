$(document).ready(function(){

  var region,city,country_code, apiKey = "6eae0f4545ae5391a82a6d3f3188c2b0";

  getLocation();


  //get the location of user
  function getLocation(){
    $.getJSON("http://ip-api.com/json",function(data){
         var lat = data.lat;
    var lon = data.lon;
     city = data.city;
     country_code = data.countryCode;
     region = data.region;
    var zip = data.zip;

    //url to find weather based upon co-ordinates
    weatherUrl_cordinates = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID="+apiKey;
    getCurrentWeather(weatherUrl_cordinates);
    });
  /* getCurrentWeather(); */
  }

  //function to find weather
  function getCurrentWeather(url){
   
    //url to find weather based uponn zip code
    //   var weatherUrl_zip = "http://api.openweathermap.org/data/2.5/weather?        zip="+zip+","+country_code+"&APPID="+apiKey; 
      //find weather usinng api call
    $.getJSON(url,function(data){
      getSetTemp(data);
     
  });
  }

  //function to get and set temperature
  function getSetTemp(data){
      var icon = data.weather[0].icon;
      var description = data.weather[0].main;
      var tempK = data.main.temp;
      var tempC = Math.floor(tempK-273.15);
      var tempF= Math.floor(tempC * 1.8 + 32);
      country_code = data.sys.country;
     
       $(".location").html("<h2>" + city + "," + country_code);
      $(".icon").html("<img class='wicon' src='http://openweathermap.org/img/w/"+icon+".png'>")
      $(".description").html("<h3>"+description+"</h3>")
      $(".temperature").html(tempC +"\t&#8451").val("celsius");
    
      //change temperature based upon user click
      var count = 0;
      $(".temperature").on("click",function(){
        console.log(count);
        if (count % 2 ==0){
          $(this).html(tempF +"\t&#8457");
          count = 1;
        }
        else{
          $(this).html(tempC +"\t&#8451");
          count = 2;
        }
       
        console.log(count);
        
      });
  }

//find the weather based upon city
  $(".go").click(function(){
     city = $(".placeData").val();
      city = city.toUpperCase();
    weatherUrl_city = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID="+apiKey;
    getCurrentWeather(weatherUrl_city);
  })

});
