$(document).ready(function() {
  // URL for our API request from NYT
  // Try appending the loading gift.

  $("#top-stories").on("change", function() {
    console.log($("#top-stories").val());

    var selectedStory = $("#top-stories").val();

    $(".top-stories").empty();
    var url =
      "https://api.nytimes.com/svc/topstories/v2/" + selectedStory + ".json";
    url +=
      "?" +
      $.param({
        "api-key": "09f87bcede464e198631c56d291230bf"
      });

    // Ajax request_
    $.ajax({
      url: url,
      method: "GET"
    })
      .done(function(data) {
        console.log(data);
        console.log(data.results);

        $.each(data.results, function(key, value){

          $(".section-articles").append(value.abstract);
        });

          

          // var html = “<div class=‘new-cell’>“;
          // html += “<a href=‘url’>” + “<p>” + value.abstract + “</p>” + “</a>“;
          // html += “</div>“;


         

        // Try using $.each to loop throught the data, eg. resultsArray
        // and check out the array in the data called results & try appending the output to your html_

        // var resultsArray = data.results;
      })
      .fail(function(err) {
        throw err;
      })
      .always(function(data) {
        // data just represents the retunrned object from NYT api

        console.log(data.results);
      });
  }); // end change event
});
