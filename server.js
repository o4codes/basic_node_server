const http = require('http');
const fs = require('fs');

const port = 8000;

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    switch (req.url) {
        case '/':
        case "/home":
            fs.readFile('pages/home.html', null, function(error, data){
                if (error){
                    res.writeHead(404);
                    res.write('File not found');
                } else{
                    res.write(data);
                }
                res.end();
            })
            break
        case "/about":
            fs.readFile('pages/about.html', null, function(error, data){
                if (error){
                    res.writeHead(404);
                    res.write('File not found');
                } else{
                    res.write(data);
                }
                res.end();
            })
            break
        case "/contact":
            fs.readFile('pages/contact.html', null, function(error, data){
                if (error){
                    res.writeHead(404);
                    res.write('File not found');
                } else{
                    res.write(data);
                }
                res.end();
            })
            break

        case "/styles/base.css":
            fs.readFile("styles/base.css",(error,data)=>{
                res.writeHead(200,{'Content-Type':'text/css'});
                res.write(data);
                return res.end();
            })
            break;

        case "/images/profile.png":
            fs.readFile("images/profile.png",(error,data)=>{
                res.writeHead(200,{'Content-Type':'image/png'});
                res.write(data);
                return res.end();
            })
            break;

        default:
            fs.readFile('pages/404.html', null, function(error, data){
                if (error){
                    res.writeHead(404);
                    res.write('File not found');
                } else{
                    res.write(data);
                }
                res.end();
            })
    }
});

server.listen(port, () => {
    console.log(`Server successfully created and running on port ${port}`);
});