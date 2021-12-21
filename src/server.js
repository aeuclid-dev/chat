const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const cors = require('cors');
const config = require('../config/webpack.dev.js');
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

const whitelist = ["http://localhost:8090"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed Origin!"));
    }
  },
};

app.use(cors(corsOptions)); // 옵션을 추가한 CORS 미들웨어 추가

// app.use(cors(corsOptions));

app.post('/v1/user/register/', (req, res) => {
  res.send('user register');
});

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