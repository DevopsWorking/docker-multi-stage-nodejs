const http = require('http');
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.end('Hello from Docker Tutorial - Multi-Stage Build!, Feel free to reach me out on whatsapp for queries');
}).listen(port, () => console.log(`Server running on ${port}`));
