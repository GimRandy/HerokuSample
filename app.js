// app.js
var server = require("./models/server.js");
var router = require("./routes/router.js");
var requestHandlers = require("./handlers/requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);