const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req)
  // console.log(req.method)
  const url = req.url;
  // Homepage
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Homepage</h1>');
    res.end();
  }
  // About Page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>About Page</h1>');
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>Page Not Found!</h1>');
    res.end();
  }
});

server.listen(5000);
