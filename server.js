import https from "https";
import fs from "fs";

//read ssl and certificate
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

//create the server
const server = https.createServer(options, (req, res)=>{

    //route handle
    if(req.url==="/"){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("WELCOME TO MY HTTPS SERVER");
    }else if(req.url==="/about"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        const aboutPage = fs.readFileSync('about.html');
        res.end(aboutPage);
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("page not found!!");
    }
});

//listen on port 300

server.listen(3000, ()=>{
    console.log("HTTPS server running at https://localhost:3000/");
});
