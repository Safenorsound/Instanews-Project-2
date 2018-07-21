$(document).ready(function() {
  $("#top-stories").on("change", function() {
    // console.log("things changed");

    // try adding the loading gif
    
    // selected value from #top-stories
    var selectedStory = $(this).val();

    // create url for api call
    var url =
      "https://api.nytimes.com/svc/topstories/v2/" + selectedStory + ".json";
    url += "?" + $.param({ "api-key": "09f87bcede464e198631c56d291230bf" });

    // ajax get request
    $.ajax({
      url: url,
      method: "GET"
    })
      .done(function(data) {
        // console.log(data.results);

        var filteredArray = data.results.slice(0, 12);
        // console.log(filteredArray);

        // var i;
        // for (i = 0; i < filteredArray.length; i++) {
        // console.log('length:' + i )
        // var abstract = filteredArray[i].abstract
        // var storyUrl = filteredArray[i].url
        // console.log(storyUrl)
        // console.log(abstract)
        // }

        $.each(filteredArray, function(index, value) {
          console.log(value);
          var imageUrl = value.multimedia[4].url;
          var storyUrl = value.url; // try adding this url e.g. storyUrl to your html template below as a link e.g. <a href=" etc...
          var abstract = value.abstract;
          var output = "<div class='nyt-article' style='background-image:url(" + imageUrl + ");'>";
          output += "<p>" + abstract + "</p>";
          output += "</div>";
          $(".section-articles").append(output);
        });
      })
      .fail(function(error) {
        console.log("error sorry");
      })
      .always(function() {
          // try removing loading gif
      });
  });
});
