$(document).ready(function(){
  var bg_colors= ["#16a085", "#27ae60",  "#f39c12", "#e74c3c", "#9b59b6", "#FB6964",  "#BDBB99", "#77B1A9", "#73A857" ];

  //function to get quotes and disply them in div
  getQuotes();
    
  //To apply random background-color
  function randomBackground(){
    
        var slected_color = bg_colors[Math.floor(Math.random() * 10)];
    
        $(".quote,.btn").css("background-color",slected_color) ;
        
        $("#title").css("color",slected_color);
  }
    
  // TO get random quote using AJAX     
  function getQuotes(){
      
    randomBackground();
      
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
   
    $.getJSON(url)
    .done(function(data){
     
        var quote = data ;
  
        $("blockquote").html("<p>"+ quote.quoteText + "</p><footer class='author'>" + quote.quoteAuthor +"</footer>")

    })
    
    .fail(function(jqxhr, textStatus, error ){
        var err = textStatus + ", " + error;

        console.log( "Request Failed: " + err );

    });
  }

    //Provide Jquery effects
   $("#new_quote").on("click",function(){
    
    $("blockquote").slideUp(2000, function(){
       
        getQuotes();
       
        $("blockquote").fadeIn(2000);
       
   });
    
});
    
    //To tweet the quote  
$("#tweet_quote").on("click",function(){
    
    var tweetData = $("blockquote").text();
    
    if(tweetData.length <=140){
        
      var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(tweetData);
      window.open(twtLink,'_blank');
    }
    else{
        
      alert("Please Chose next quote!");
        
    }
  });
});
