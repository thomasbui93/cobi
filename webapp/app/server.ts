"use strict";
const express =  require("express");
import route from "./routers";
// Constants
const PORT = 8000;
const HOST = "0.0.0.0";

// App
const app = express();
route(app);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);