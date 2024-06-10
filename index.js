import http from 'http';
import fs from 'fs';
import url from 'url';

http
  .createServer((req, res) => {
    let cur_url = url.parse(req.url, true);
    let filename = './pages' + cur_url.pathname;
    res.setHeader('Content-Type', 'text.html');
    let path = './pages/';

    switch (req.url) {
      case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
      case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
      case '/contact-me':
        path += 'contact-me.html';
        res.statusCode = 200;
        break;
      default:
        path += '404.html';
        res.statusCode = 404;
        break;
    }

    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.end(data);
      }
    });
  })
  .listen(8080);

// server.listen(8080, 'localhost', () => {
//   console.log('listening to 8080');
// });
