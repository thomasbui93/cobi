'use strict';
import express from 'express';

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world! this is nice');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`)