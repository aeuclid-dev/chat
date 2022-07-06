import WebSocket from 'ws';

export default class Server {
    static singleton = null;

    constructor(server) {
        if(singleton) {
            return singleton;
        }

        this._server = new WebSocket.Server({
            noServer: true,
            path: "/ws"
        });

        this._server.on("connection", (connection, request) => this.onConnection(connection, request));

        server.on("upgrade", (request, socket, head) => this.onUpgrade(request, socket, head));

        singleton = this;
    }

    onUpgrade(request, socket, head) {
        this._server.handleUpgrade(request, socket, head, websocket => {
            this._server.emit("connection", websocket, request);
        });
    }

    onConnection(connection, request) {
        connection.on("message", o => this.onMessage(connection, request, o));
        connection.on("close", o => this.onClose(connection, request, o));
        connection.on("error", o => this.onError(connection, request, o));
        connection.on("open", o => this.onOpen(connection, request, o));
    }

    onOpen(connection, request, o){

    }

    onMessage(connection, request, o){

    }

    onClose(connection, request, o){

    }

    onError(connection, request, o){
        
    }
}
