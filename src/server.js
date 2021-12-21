const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const cors = require('cors');
const config = require('../config/webpack.dev.js');
const compiler = webpack(config);
const mysql = require('mysql2');

const database = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'novemberizing@21',
  database: 'xchat',
  connectionLimit: 32,
  insecureAuth : true
};

const pool = mysql.createPool(database);

console.log(pool);

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
app.use(express.json());

app.post('/v1/user/register/', (req, res) => {
  if(req.body.email) {
    pool.getConnection(function(error, connection) {
      if(!error) {
        const sql = `CALL REGISTER_USER(?,?,?)`;
        // const sql = `INSERT INTO TB_USER (\`email\`, \`name\`, \`description\`, \`like\`, \`datetime\`) VALUES (?, ?, ?, 5, CURRENT_TIMESTAMP())`;
        const params = [req.body.email, req.body.name, req.body.description];
        connection.query(sql, params, function(error, result) {
          if(!error) {
            console.log('ok');
            res.send({'message': 'ok'});
          } else {
            console.log(error);
            res.status(500).send({'error': 'internal storage error'});
          }
        });
      } else {
        console.log(error);
        res.status(500).send({'error': 'server busy'});
      }
      if(connection) {
        connection.release();
      }
    });
  } else {
    res.status(500).send({'error': 'invalid param'});
  }
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