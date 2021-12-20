const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../config/webpack.dev.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get('/v1/user/register/', (req, res) => {
  res.send('user register');
});

app.get('/v1/room/create/', (req, res) => {
  res.send('room create');
});

app.get('/v1/room/delete/', (req, res) => {
    res.send('room delete');
});

app.get('/v1/room/invite/', (req, res) => {
    res.send('room invite');
});

app.get('/v1/room/invite/accept/', (req, res) => {
    res.send('room invite accept');
});

app.get('/v1/room/invite/reject/', (req, res) => {
    res.send('room invite reject');
});

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});