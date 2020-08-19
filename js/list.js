var fs = require('fs');
var files = fs.readdirSync('../assets/bg/');

var text = "var backgroundData = [\n"

for (var i = 0; i < files.length; ++i) {
	text += '\t"'+files[i]+'",\n';
}

text += "];"

fs.writeFile("backgroundData.js", text, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});