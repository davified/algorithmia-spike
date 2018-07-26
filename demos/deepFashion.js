const client = require("./client");

var input = {
  image:
    "https://media.newyorker.com/photos/5b4b8c5797ef250b46bfa72d/master/w_727,c_limit/Gessen-World-Cup-Pussy-Riot.jpg",
  model: "small"
};

client
  .algo("algorithmiahq/DeepFashion/1.2.4")
  .pipe(input)
  .then(function(output) {
    console.log(output);
  });
