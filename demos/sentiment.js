const client = require("./client");
var input = {
  document: "Thanks for your help!"
};

client
  .algo("nlp/SentimentAnalysis/1.0.4")
  .pipe(input)
  .then(function(output) {
    console.log(output);
  });
