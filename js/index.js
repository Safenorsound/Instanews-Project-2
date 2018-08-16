$(document).ready(function() {
  $("#top-stories").on("change", function() {
    // console.log("things changed");
    $(".section-articles").empty();
    // try adding the loading gif
    $('.section-articles').append('<div id="spinner"></div>');

    // selected value from #top-stories
    var selectedStory = $(this).val();

    // create url for api call
    var url =
      "https://api.nytimes.com/svc/topstories/v2/" + selectedStory + ".json";
    url += "?" + $.param({ "api-key": "09f87bcede464e198631c56d291230bf" });

    // ajax get request from user selection
    $.ajax({
      url: url,
      method: "GET"
    })
      .done(function(data) {

        var filteredArray = data.results.slice(0, 12);

        $.each(filteredArray, function(index, value) {
          //   console.log(value);
          var imageUrl = value.multimedia[4].url;
          var storyUrl = value.url;
          var abstract = value.abstract;

          var output = "<div class='entire-link' style='background: url(" + imageUrl + "); background-size:cover; background-position:center;'>" + "<a target='_blank' href='" + storyUrl + "'>";

// Image not clickable yet. Maybe an issue with the placement of the <a href> I wasn't able to make the entire article clickable in an href without the code breaking. -JR

          output += "<div class='text-section'>";
          output += "<p>" + abstract + "</p>";
          output += "</div>";
          output += "</a>";
          output += "</div>";
          $(".section-articles").append(output);
        });
      })
      .fail(function(error) {
        // $(".section-articles").append(output)
        console.log("error sorry");
      })
      .always(function() {
        // To remove the loading gif
        $('#spinner').detach();
       
      }); // End of "Always" function
  }); // End of top-stories function.
}); // End of document-ready Jquery function.
