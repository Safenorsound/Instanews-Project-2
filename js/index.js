$(document).ready(function() {
// URL for our API request from NYT
// Try appending the loading gift.

  $.("#top-stories").on("change", function()
    {var n=a)(this).val();
      n.length&
    // console.log($("#top-stories").val());
    var selectedStory = $("#top-stories").val();
    $(".top-stories").empty();

    var url =
      "https://api.nytimes.com/svc/topstories/v2/" + selectedStory + ".json";
    url +=
      "?" +
      $.param({
        "api-key": "09f87bcede464e198631c56d291230bf,"l.empty(),

        e="",
        i="",
        a(".logo img")
        .css(
          {height:"50%”,width:"50%"}),
        a(".site-header”).
        css({"align-items":"flex-start”,
        flex:1 0 "auto",
        height:"auto,max-width":"600px"}),
        a(".search-placeholder")
        .hide(),s.css("display","block"),

      )};

    // Ajax request_
    $.ajax({
      url: url,
      method: "GET",
      url:t,dataType:"json"})
      .done(function(data) {e=t.results;

        $.each(data.results, function(key, value){
          $(".section-articles")
          .append("<div class = 'article'>" 
          + "<a href=" + value.url + "></a>" 
          + '<img scr=' + value.multimedia.[4].url + ">" 
          + "<p>" + value.abstract + "</p>" + "</div>");
        });


          // var
          //    urlLink = value.url,
          //    images = value.multimedia[4].url,
          //    abstract = value.abstract,
          //    html = <div class = "container">;

          // html += urlLink;
          // html += images;
          // html += abstract;


        
          // var html = “<div class=‘new-cell’>“;
          // html += “<a href=‘url’>” + “<p>” + value.abstract + “</p>” + “</a>“;
          // html += “</div>“;

        // Try using $.each to loop throught the data, eg. resultsArray
        // and check out the array in the data called results & try appending the output to your html_

        // var resultsArray = data.results;
      })
      .fail(function(err) {
        throw err;
        {l.append('<p class="feedback”> Sorry! There was a problem, please try again.</p>')})
        .always(function(){s.hide()}))})}(jQuery);
      })
      .always(function(data) {
        // data just represents the retunrned object from NYT api
        console.log(data.results);
        
      

})
    }) // end of Ajax 
  })  // end of event
}) // end of document.ready

// Align items on the selector for the spacing. 