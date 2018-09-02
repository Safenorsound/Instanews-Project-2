$(document).ready(function() {
  $('#top-stories').on('change', function() {
    $('.section-articles').empty();
    // try adding the loading gif
    $('.ajax-loader.gif').show();

    // selected value from #top-stories
    var selectedStory = $(this).val();

    // create url for api call
    var url =
      'https://api.nytimes.com/svc/topstories/v2/' + selectedStory + '.json';
    url += '?' + $.param({ 'api-key': '09f87bcede464e198631c56d291230bf' });

    // ajax get request from user selection
    $.ajax({
      url: url,
      method: 'GET',
      beforeSend: function() {}
    })
      .done(function(data) {
        var filteredArray = data.results.slice(0, 12);

        $.each(filteredArray, function(index, value) {
          //   console.log(value);
          var imageUrl = value.multimedia[4].url;
          var storyUrl = value.url;
          var abstract = value.abstract;

          var output =
            "<a target='_blank' class='entire-link' href='" +
            storyUrl +
            "'style='background-image: url(" +
            imageUrl +
            ")'>";
          output += '<p>' + abstract + '</p>';
          output += '</a>';
          $('.section-articles').append(output);
          $('.ajax-loader.gif').hide();
        });
      })
      .fail(function(err) {
        throw err;
      })
      .always(function() {
        setTimeout(function() {
          $('.ajax-loader.gif').hide();
        }, 2000);
      });

    // End of "Always" function
  }); // End of top-stories function.
}); // End of document-ready Jquery function.
