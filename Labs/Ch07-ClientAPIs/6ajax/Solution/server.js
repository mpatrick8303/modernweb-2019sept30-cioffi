var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(9007);
console.log('Listening on http://localhost:9007');