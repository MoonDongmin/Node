//const http = require('http');
import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(18080, () => { // 서버 연결
    console.log('808번 포트에서 서버 대기 중입니다!');
  });