const trans = require("./translator");
const { exec } = require("child_process");
var fs = require("fs"),
  readline = require("readline");

function processor(source) {
  var rd = readline.createInterface({
    input: fs.createReadStream(source),

    console: false,
  });
  var code = "";
  rd.on("line", function (line) {
    var linarr = line.split(" ");
    //console.log(linarr);
    trans.translate({
      verb: linarr[0],
      arguments: linarr,
    });
    //console.log(code);
  });
}

processor(process.argv[2]);
