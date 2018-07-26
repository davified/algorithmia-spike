const client = require("./client");

var input =
  "https://homepage.cs.uri.edu/~thenry/resources/unix_art/ch01s06.html";

client
  .algo("nlp/SummarizeURL/0.1.4")
  .pipe(input)
  .then(function(output) {
    console.log(output);
  });
