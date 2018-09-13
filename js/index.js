$(document).ready(function() {
  $('#top-stories').on('change', function() {
    $('.ajax-loader').show();
    event.preventDefault();

    $('div#logo').addClass('header-toggle');

    // $('#div#logo').animate({ height: '67px;' }, 1000, function() {
    //   $(this).css('height', 'auto');
    //   console.log(this);
    // });

    // $('div#logo,.img').animate(
    //   {
    //     width: '67px;',
    //     height: '67px'
    //   },
    //   800, // after 8 milliseconds run function
    //   function() {
    //     $('.box').animate(
    //       {
    //         width: '6rem',
    //         height: '6rem'
    //       }
    //       // 3000, // after 3 seconds run another function
    //       // function() {
    //       //   alert('animations complete');
    //       // }
    //     );
    //   }
    // );

    $('.section-articles').empty();

    // selected value from #top-stories
    var selectedStory = $(this).val();

    // create url for api call
    var url =
      'https://api.nytimes.com/svc/topstories/v2/' + selectedStory + '.json';
    url += '?' + $.param({ 'api-key': '09f87bcede464e198631c56d291230bf' });

    // ajax get request from user selection
    $.ajax({
      url: url,
      method: 'GET'
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
          output +=
            '<div class="story-meta"><p>' + abstract + '</p>' + '</div>';
          output += '</a>';
          $('.section-articles').append(output);
        });
        setTimeout(function() {
          $('.ajax-loader').hide();
        }, 1000);
      })
      .fail(function(err) {
        throw err;
      })
      .always(function() {
        // Slide 17
        setTimeout(function() {
          $('.ajax-loader').hide();
        }, 1000);
      });

    // End of "Always" function
  }); // End of top-stories function.
}); // End of document-ready Jquery function.
