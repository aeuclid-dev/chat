const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const cors = require('cors');
const config = require('../config/webpack.dev.js');
const compiler = webpack(config);
const mysql = require('mysql2');
const { WebSocketServer } = require('ws');

console.log(WebSocketServer);

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

/**
 * /v1/user/register/
 */
app.post('/v1/user/register/', (req, res) => {
  if(req.body.email) {
    pool.getConnection(function(error, connection) {
      if(!error) {
        const sql = `CALL REGISTER_USER(?,?,?)`;
        // const sql = `INSERT INTO TB_USER (\`email\`, \`name\`, \`description\`, \`like\`, \`datetime\`) VALUES (?, ?, ?, 5, CURRENT_TIMESTAMP())`;
        const params = [req.body.email, req.body.name, req.body.description];
        connection.query(sql, params, function(error, result) {
          if(!error) {
            res.send({message: {userid: result[0][0].id}});
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

app.get('/v1/room/list/', (req, res) => {
  pool.getConnection(function(error, connection) {
    if(!error) {
      const sql = `SELECT USER.* FROM TB_ROOM ROOM LEFT JOIN TB_USER USER ON USER.id = ROOM.id  ORDER BY ROOM.id DESC LIMIT 0, 10`;
      connection.query(sql, function(error, result) {
        if(!error) {
          res.send({message: {result}});
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

const wss = new WebSocketServer({ port: 3030 });

function createRoom(ws, userid) {
  pool.getConnection(function(error, connection) {
    if(!error) {
      const sql = `CALL CREATE_ROOM(?)`;
      const params = [ userid ];
      connection.query(sql, params, function(error, result) {
        if(!error) {
          ws.send(JSON.stringify({message: {result}}));
        } else {
          console.log(error);
          ws.send(JSON.stringify({'error': 'internal storage error'}));
        }
      });
    } else {
      console.log(error);
      ws.send(JSON.stringify({'error': 'server busy'}));
    }
    if(connection) {
      connection.release();
    }
  });
}

function deleteRoom(ws, userid) {
  pool.getConnection(function(error, connection) {
    if(!error) {
      const sql = `CALL DELETE_ROOM(?)`;
      const params = [ userid ];
      connection.query(sql, params, function(error, result) {
        if(error) {
          console.log(error);
        }
      });
    } else {
      console.log(error);
    }
    if(connection) {
      connection.release();
    }
  });
}

wss.on('connection', function connection(ws) {
  let userid = 0;

  ws.on('open', function(event) {
    console.log(event);
    console.log('insert implement');
  });

  ws.on('upgrade', function(event) {
    console.log(event);
    console.log('update');
  });

  ws.on('message', function message(data) {
    const json = JSON.parse(data.toString());
    console.log(json);
    if(json.message === 'open') {
      userid = json.userid;
      createRoom(ws, json.userid);
      console.log('create room');
    } else if(json.message === 'request chat') {
      console.log('hello world');
    }
  });

  ws.on('error', function(event) {
    console.log(event);
  });

  ws.on('close', function(event) {
    console.log('close ' + userid);
    console.log('delete implement');
    deleteRoom(ws, userid);
  });

  ws.send('something');
});
