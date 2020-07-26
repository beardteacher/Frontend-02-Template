const net = require("net");

class Request {
    constructor(options) {
        this.method = options.method || "GET"; // method 默认值 GET
        this.host = options.host; // host 无法给默认值
        this.port = options.port || 80; // port 默认值 80
        this.path = options.path || "/"; // path 默认值 "/"
        this.body = options.body || {}; // body 默认值 {}
        this.headers = options.headers || {}; // headers 默认值 {}
        if (!this.headers["Content-Type"]) {
            this.headers["Content-Type"] = "application/x-www-form-urlencoded"; // 在 HTTP 协议里一定要有 Content-Type 否则的话它的 body 是没有办法解析的
        }

        // body 是需要一些编码的 以下为两种最简单的编码格式
        if (this.headers["Content-Type"] === "application/json") {
            this.bodyText = JSON.stringify(this.body);
        } else if (this.headers["Content-Type"] === "application/x-www-form-urlencoded") {
            this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&');
        }
        this.headers["Content-Length"] = this.bodyText.length; // Content-Length 不建议传值。最好取 this.bodyText.length。
    }

    send(connection) {
        return new Promise((resolve, reject) => {
            const parser = new ResponseParser;
            if (connection) {
                connection.write(this.toString());
            } else {
                connection = net.createConnection({
                    host: this.host,
                    port: this.port
                }, () => {
                    connection.write(this.toString());
                })
            }
            connection.on('data', (data) => {
                console.log(data.toString());
                parser.receive(data.toString());
                if (parser.isFinished) {
                    resolve(parser.response);
                    connection.end();
                }
            });
            connection.on('error', (err) => {
                reject(err);
                connection.end();
            })
        });
    }

    toString() {
            return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r
\r
${this.bodyText}`
    }
}

class ResponseParser {
    constructor() {

    }
    receive(string) {
        for (let i = 0; i < string.length; i++) {
            this.receiveChar(string.charAt(i));
        }
    }
    receiveChar(char) {

    }
}

void async function() {
    // config object 
    let request = new Request({
        method: "POST",
        host: "127.0.0.1",
        port: "8088",
        path: "/",
        headers: {
            ["X-Foo2"]: "customed"
        },
        body: {
            name: 'BeardTeacher'
        }
    });

    let response = await request.send(); // send() 返回一个 promise

    console.log(response);

}();