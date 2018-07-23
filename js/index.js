$(document).ready(function() {
  $("#top-stories").on("change", function() {
    // console.log("things changed");
    $(".section-articles").empty();
    // try adding the loading gif

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
          var output = "<div class='entire-link' style='background: url(" +
          imageUrl +
          "); background-size: cover; background-position:center;'>";
          output += "<a target='_blank' href='" + storyUrl + "'>";

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
        // try removing loading gif
      }); // End of "Always" function
  }); // End of top-stories function.
}); // End of document-ready Jquery function.
