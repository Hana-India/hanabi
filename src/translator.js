const fs = require("fs");
//create variables x,y and z

// var data = {
//   verb: "create",
//   arguments: ["variable", "x=0, y=10"],
// };

function translate(data) {
  var verb = data.verb;
  var arguments = data.arguments;
  var template_code;

  fs.readFile("Temps/" + verb + ".hbi", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    template_code = data;
    //console.log(template_code);
    for (var counter = 0; counter < arguments.length; counter++) {
      var temp = "`" + counter + "`";
      while (template_code.indexOf(temp) != -1) {
        template_code = template_code.replace(temp, arguments[counter]);
      }
    }
    console.log("\n->" + template_code);
  });
}

module.exports = { translate };
