var titleCase = function(input_title) {
  var modified_title = ''
  var input_words = input_title.split(' ');
  var counter = 0;
  var exceptions = ['a','an','of','the','and','on','at','for','nor','but','to','from','by', 'if', 'is']

  input_words.forEach(function(input_word) {
    var modified_word = input_word.toLowerCase();

    if ((counter > 0) && (exceptions.indexOf(input_word) >= 0) ) {
      modified_title += modified_word + ' ';
    } else {
    modified_title += modified_word.charAt(0).toUpperCase() + modified_word.slice(1) + ' ';
    counter += 1;
    }
  });

  return modified_title.trim();

};

$(document).ready(function() {
  $('form#title-case').submit(function(event) {
    var input = ($('input#input_sentence').val())
    var result = titleCase(input);

  $('.sentence').text(result)

  $('#result').show();
  event.preventDefault();

  });
});
